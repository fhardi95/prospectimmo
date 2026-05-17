import Stripe from 'stripe'
import { NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const PLANS = {
  pro: {
    name: 'Pro',
    amount: 4900, // $49 in cents
    interval: 'month',
  },
  agency: {
    name: 'Agency',
    amount: 14900, // $149 in cents
    interval: 'month',
  },
}

export async function POST(request) {
  try {
    const { plan, email } = await request.json()

    if (!PLANS[plan]) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      ...(email && email.includes('@') ? { customer_email: email } : {}),
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `ProspectImmo ${PLANS[plan].name}`,
              description: `ProspectImmo ${PLANS[plan].name} plan - monthly subscription`,
            },
            unit_amount: PLANS[plan].amount,
            recurring: {
              interval: PLANS[plan].interval,
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?payment=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
