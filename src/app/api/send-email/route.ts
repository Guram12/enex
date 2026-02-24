import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, subject, message } = await request.json();

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.NEXT_BREVO_API_KEY!,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: "Contact Form", email: "info@shemaxsene.space" },
        to: [{ email: process.env.RECIPIENT_EMAIL, name: "Recipient" }],
        replyTo: { email: email, name: `${firstName} ${lastName}` },
        subject: `Contact Form: ${subject}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h2 style="color: #333; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #555; width: 120px;">Name:</td>
                <td style="padding: 8px;">${firstName} ${lastName}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #555;">Subject:</td>
                <td style="padding: 8px;">${subject}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold; color: #555; vertical-align: top;">Message:</td>
                <td style="padding: 8px;">${message}</td>
              </tr>
            </table>
            <p style="color: #999; font-size: 12px; margin-top: 20px;">This email was sent from your website contact form.</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API error:', errorData);
      throw new Error(errorData.message || 'Failed to send email');
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error.message);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}