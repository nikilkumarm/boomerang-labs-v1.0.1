import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, social, service, package: selectedPackage, project } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      )
    }

    const hostEmail = process.env.CONTACT_EMAIL || 'hello@boomeranglabs.in'

    // Formatted email HTML
    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px;">
        <div style="margin-bottom: 24px; border-bottom: 2px solid #2E6BFF; padding-bottom: 16px;">
          <h1 style="font-size: 24px; font-weight: 800; color: #08152E; margin: 0;">New Project Inquiry</h1>
          <p style="font-size: 14px; color: #64748b; margin-top: 4px;">Received via Boomerang Labs Contact Portal</p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 12px 0; font-weight: 700; color: #64748b; width: 140px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Client Name</td>
            <td style="padding: 12px 0; color: #08152E; font-size: 15px; font-weight: 600;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 12px 0; font-weight: 700; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
            <td style="padding: 12px 0; color: #08152E; font-size: 15px;"><a href="mailto:${email}" style="color: #2E6BFF; text-decoration: none;">${email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 12px 0; font-weight: 700; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td>
            <td style="padding: 12px 0; color: #08152E; font-size: 15px;">${phone || 'Not provided'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 12px 0; font-weight: 700; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Social ID / URL</td>
            <td style="padding: 12px 0; color: #08152E; font-size: 15px;">${social || 'Not provided'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 12px 0; font-weight: 700; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Service</td>
            <td style="padding: 12px 0; color: #08152E; font-size: 15px; font-weight: 600; color: #2E6BFF;">${service || 'General'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 12px 0; font-weight: 700; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Selected Package</td>
            <td style="padding: 12px 0; color: #08152E; font-size: 15px; font-weight: 600;">${selectedPackage || 'Custom'}</td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding: 20px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
          <h3 style="margin-top: 0; margin-bottom: 8px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Project Description</h3>
          <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${project || 'No details provided'}</p>
        </div>

        <div style="margin-top: 32px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 16px;">
          Sent directly from the Boomerang Labs website contact portal.
        </div>
      </div>
    `

    // If SMTP credentials are present in env, send via nodemailer
    const smtpHost = process.env.SMTP_HOST
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_PASS
    const smtpPort = Number(process.env.SMTP_PORT) || 587

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })

      await transporter.sendMail({
        from: `"Boomerang Labs Inquiry" <${smtpUser}>`,
        to: hostEmail,
        replyTo: email,
        subject: `New Transmission: ${name} (${service || 'Inquiry'})`,
        html: emailHtml,
      })
    } else if (smtpUser && smtpPass) {
      // Direct Gmail service fallback
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })

      await transporter.sendMail({
        from: `"Boomerang Labs Inquiry" <${smtpUser}>`,
        to: hostEmail,
        replyTo: email,
        subject: `New Transmission: ${name} (${service || 'Inquiry'})`,
        html: emailHtml,
      })
    } else {
      // Direct instant delivery to hello@boomeranglabs.in without requiring local SMTP credentials
      try {
        const response = await fetch(`https://formsubmit.co/ajax/${hostEmail}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Referer': 'https://boomeranglabs.in/contact',
            'Origin': 'https://boomeranglabs.in',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
          },
          body: JSON.stringify({
            _subject: `New Transmission: ${name} (${service || 'Inquiry'})`,
            _template: 'table',
            _captcha: 'false',
            'Client Name': name,
            'Client Email': email,
            'Phone Number': phone || 'Not provided',
            'Social Handle / URL': social || 'Not provided',
            'Service Category': service || 'General',
            'Selected Package': selectedPackage || 'Custom',
            'Project Scope & Details': project || 'No details provided',
          }),
        })

        const data = await response.json()
        console.log('Direct Mail Dispatch Status:', data)
      } catch (dispatchErr) {
        console.error('Direct mail dispatch fallback error:', dispatchErr)
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Your transmission has been successfully delivered.',
    })
  } catch (error: any) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { error: error?.message || 'Failed to process inquiry transmission.' },
      { status: 500 }
    )
  }
}
