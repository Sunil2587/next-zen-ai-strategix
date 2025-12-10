import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variable
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log submission
    console.log('Contact Form Submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // Send email using Resend if API key is configured
    if (resend) {
      try {
        console.log('Attempting to send email via Resend...');
        const result = await resend.emails.send({
          from: 'Contact Form <onboarding@resend.dev>', // Use your verified domain later
          to: ['demo87173@gmail.com'],
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #06b6d4; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              <div style="margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Message:</strong></p>
                <div style="background: #f3f4f6; padding: 15px; border-radius: 5px; margin-top: 10px;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
              <p style="color: #6b7280; font-size: 12px;">
                Submitted on ${new Date().toLocaleString()}
              </p>
            </div>
          `,
        });
        console.log('Email sent successfully via Resend:', result);
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't fail the request if email fails - still log the submission
      }
    } else {
      console.warn('Resend not initialized - RESEND_API_KEY missing');
    }

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been received. We will contact you soon!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
}
