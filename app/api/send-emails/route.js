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
          .replace(/\{\{name\}\}/g, lead.name || 'there')
          .replace(/\{\{address\}\}/g, lead.address || 'your property')

        const messageHTML = personalizedMessage
          .split('\n')
          .map(line => line.trim()
            ? `<p style="margin:0 0 14px 0;color:#1a1a2e;font-size:15px;line-height:1.75;">${line}</p>`
            : '<div style="height:6px;"></div>'
          )
          .join('')

        const { data, error } = await resend.emails.send({
          from: 'GotProspect <noreply@gotprospect.com>',
          to: lead.email,
          subject: `A smarter way to find home sellers — GotProspect`,
          html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>GotProspect</title>
</head>
<body style="margin:0;padding:0;background:#f0f2f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f2f5;padding:40px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

  <!-- Header -->
  <tr>
    <td style="background:linear-gradient(135deg,#0f172a 0%,#1e3a8a 50%,#1d4ed8 100%);border-radius:16px 16px 0 0;padding:36px 48px;text-align:center;">
      <table cellpadding="0" cellspacing="0" style="margin:0 auto 16px;">
        <tr>
          <td style="background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.2);border-radius:12px;padding:10px 20px;">
            <span style="color:#fff;font-size:22px;font-weight:800;letter-spacing:-0.5px;">Got<span style="color:#93c5fd;">Prospect</span></span>
          </td>
        </tr>
      </table>
      <p style="color:rgba(255,255,255,0.6);font-size:11px;margin:0;letter-spacing:2px;text-transform:uppercase;font-weight:500;">Automated Lead Generation for Real Estate Agents</p>
    </td>
  </tr>

  <!-- Decorative bar -->
  <tr>
    <td style="background:linear-gradient(90deg,#1d4ed8,#3b82f6,#60a5fa);height:3px;"></td>
  </tr>

  <!-- Body -->
  <tr>
    <td style="background:#ffffff;padding:44px 48px 36px;">

      <!-- Message content -->
      <div style="margin-bottom:32px;">
        ${messageHTML}
      </div>

      <!-- CTA Button -->
      <table cellpadding="0" cellspacing="0" style="margin:36px 0;">
        <tr>
          <td style="background:linear-gradient(135deg,#1d4ed8,#2563eb);border-radius:10px;box-shadow:0 4px 15px rgba(37,99,235,0.35);">
            <a href="https://gotprospect.com?ref=email" style="display:inline-block;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:16px 36px;letter-spacing:0.3px;">
              Start My Free 30-Day Trial &rarr;
            </a>
          </td>
        </tr>
      </table>

      <!-- Divider -->
      <table cellpadding="0" cellspacing="0" width="100%" style="margin:32px 0;">
        <tr>
          <td style="border-top:1px solid #e2e8f0;"></td>
        </tr>
      </table>

      <!-- Testimonial -->
      <table cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border-radius:12px;padding:20px 24px;border-left:4px solid #2563eb;">
            <p style="margin:0 0 4px;color:#1e40af;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;">What agents are saying</p>
            <p style="margin:0 0 10px;color:#334155;font-size:14px;line-height:1.7;font-style:italic;">"I got 3 new listing appointments in my first month. GotProspect runs on autopilot while I focus on closing deals."</p>
            <p style="margin:0;color:#64748b;font-size:12px;font-weight:600;">— James M. &nbsp;·&nbsp; Realtor at Keller Williams</p>
          </td>
        </tr>
      </table>

      <!-- Signature -->
      <table cellpadding="0" cellspacing="0" style="margin-top:36px;">
        <tr>
          <td style="border-left:3px solid #e2e8f0;padding-left:16px;">
            <p style="margin:0 0 2px;color:#94a3b8;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Best regards</p>
            <p style="margin:0 0 4px;color:#0f172a;font-size:16px;font-weight:700;">${agentName}</p>
            <p style="margin:0 0 6px;color:#64748b;font-size:13px;">Founder, GotProspect</p>
            <a href="https://gotprospect.com" style="color:#2563eb;font-size:13px;text-decoration:none;font-weight:500;">gotprospect.com</a>
          </td>
        </tr>
      </table>

    </td>
  </tr>

  <!-- Footer -->
  <tr>
    <td style="background:#f8fafc;border-radius:0 0 16px 16px;padding:20px 48px;border-top:1px solid #e2e8f0;">
      <p style="margin:0;color:#94a3b8;font-size:11px;text-align:center;line-height:1.8;">
        You received this email because a real estate professional reached out via GotProspect.<br/>
        To unsubscribe, simply reply with <strong>"unsubscribe"</strong> and you won't hear from us again.<br/>
        <a href="https://gotprospect.com/privacy" style="color:#64748b;text-decoration:none;">Privacy Policy</a> &nbsp;&middot;&nbsp;
        <a href="https://gotprospect.com" style="color:#64748b;text-decoration:none;">gotprospect.com</a>
      </p>
    </td>
  </tr>

</table>
</td></tr>
</table>

</body>
</html>`,
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
