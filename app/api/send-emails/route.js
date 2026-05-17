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

        const messageLines = personalizedMessage.split('\n').map(line => 
          line.trim() ? `<p style="margin: 0 0 16px 0; color: #374151; font-size: 15px; line-height: 1.7;">${line}</p>` : ''
        ).join('')

        const { data, error } = await resend.emails.send({
          from: 'GotProspect <noreply@gotprospect.com>',
          to: lead.email,
          subject: `More listings, less cold calling — GotProspect`,
          html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GotProspect</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%); border-radius: 12px 12px 0 0; padding: 32px 40px; text-align: center;">
              <table cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                <tr>
                  <td style="background: rgba(255,255,255,0.2); border-radius: 10px; padding: 8px 12px; display: inline-block;">
                    <span style="color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">Got<span style="color: #93c5fd;">Prospect</span></span>
                  </td>
                </tr>
              </table>
              <p style="color: rgba(255,255,255,0.8); font-size: 13px; margin: 12px 0 0 0; letter-spacing: 0.5px; text-transform: uppercase;">Automated Lead Generation for Real Estate Agents</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background: #ffffff; padding: 40px 40px 32px 40px;">
              
              <!-- Greeting -->

              <!-- Message -->
              ${messageLines}

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" style="margin: 32px 0;">
                <tr>
                  <td style="background: #2563eb; border-radius: 8px; padding: 0;">
                    <a href="https://gotprospect.com?ref=email" style="display: inline-block; color: #ffffff; font-size: 15px; font-weight: 600; text-decoration: none; padding: 14px 32px; letter-spacing: 0.3px;">
                      Start my free 30-day trial →
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 32px 0;">

              <!-- Social proof -->
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="background: #f0f9ff; border-radius: 8px; padding: 16px 20px; border-left: 3px solid #2563eb;">
                    <p style="margin: 0; color: #1e40af; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">What agents are saying</p>
                    <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6; font-style: italic;">"I got 3 new listing appointments in my first month. GotProspect runs on autopilot while I focus on closing deals."</p>
                    <p style="margin: 8px 0 0 0; color: #6b7280; font-size: 13px;">— James M., Realtor at Keller Williams</p>
                  </td>
                </tr>
              </table>

              <!-- Signature -->
              <table cellpadding="0" cellspacing="0" style="margin-top: 32px;">
                <tr>
                  <td>
                    <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.6;">
                      Best regards,<br>
                      <strong style="color: #111827;">${agentName}</strong><br>
                      <span style="color: #6b7280; font-size: 13px;">Founder, GotProspect</span>
                    </p>
                    <p style="margin: 8px 0 0 0;">
                      <a href="https://gotprospect.com" style="color: #2563eb; font-size: 13px; text-decoration: none;">gotprospect.com</a>
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background: #f9fafb; border-radius: 0 0 12px 12px; padding: 20px 40px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px; text-align: center; line-height: 1.6;">
                You received this email because a real estate professional reached out via GotProspect.<br>
                To unsubscribe, reply with "unsubscribe" and you won't hear from us again.<br>
                <a href="https://gotprospect.com" style="color: #6b7280; text-decoration: none;">gotprospect.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
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
