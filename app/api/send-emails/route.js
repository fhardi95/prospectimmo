import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { leads, agentName, agentEmail, message } = await request.json()

    if (!leads || leads.length === 0) {
      return NextResponse.json({ error: 'No leads provided' }, { status: 400 })
    }

    const results = []

    for (const lead of leads) {
      try {
        const personalizedMessage = message
          .replace('{{name}}', lead.name || 'Homeowner')
          .replace('{{address}}', lead.address || 'your property')

        const { data, error } = await resend.emails.send({
          from: 'GotProspect <noreply@gotprospect.com>',
          to: lead.email,
          subject: `A message from ${agentName} about your property`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
              <p style="font-size: 16px; color: #333; line-height: 1.6;">
                ${personalizedMessage.replace(/\n/g, '<br/>')}
              </p>
              <br/>
              <p style="font-size: 14px; color: #666;">
                Best regards,<br/>
                <strong>${agentName}</strong><br/>
                <a href="mailto:alex@gotprospect.com" style="color: #2563FF;">alex@gotprospect.com</a>
              </p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;"/>
              <p style="font-size: 12px; color: #999;">
                You received this email because a real estate agent is interested in your property.
                To unsubscribe, reply with "unsubscribe".
              </p>
            </div>
          `,
        })

        if (error) {
          results.push({ email: lead.email, status: 'failed', error: error.message })
        } else {
          results.push({ email: lead.email, status: 'sent', id: data.id })
        }
      } catch (err) {
        results.push({ email: lead.email, status: 'failed', error: err.message })
      }

      // Small delay to avoid rate limiting
      await new Promise(r => setTimeout(r, 100))
    }

    const sent = results.filter(r => r.status === 'sent').length
    const failed = results.filter(r => r.status === 'failed').length

    return NextResponse.json({ success: true, sent, failed, results })
  } catch (error) {
    console.error('Send emails error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
