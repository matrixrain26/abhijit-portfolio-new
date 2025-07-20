import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Get API key from environment variable
const apiKey = process.env.RESEND_API_KEY;
// Initialize Resend with your API key
const resend = apiKey ? new Resend(apiKey) : null;

export async function POST(request: Request) {
  try {
    // Check if Resend is properly initialized
    if (!resend) {
      console.error('RESEND_API_KEY is not defined in environment variables');
      return NextResponse.json(
        { 
          error: 'Email service configuration error', 
          details: { 
            message: 'Missing API key. Please check your .env.local file and restart the server.' 
          }
        },
        { status: 500 }
      );
    }

    // Parse the request body
    const { name, email, subject, message } = await request.json();
    
    // Validate the required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    try {
      // Send the email using Resend
      const data = await resend.emails.send({
        from: 'onboarding@resend.dev', // Using Resend's default verified domain
        to: ['abhijit.sk@somaiya.edu'], // Using array format for better compatibility
        reply_to: email,
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
      
      console.log('Email sent successfully:', data);
      return NextResponse.json({ success: true, data });
    } catch (sendError: any) {
      console.error('Error in Resend API:', sendError);
      return NextResponse.json(
        { 
          error: 'Failed to send email via Resend API', 
          details: {
            message: sendError.message || 'Unknown error',
            code: sendError.statusCode || 500
          }
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('General error in API route:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process request',
        details: {
          message: error.message || 'Unknown error'
        }
      },
      { status: 500 }
    );
  }
}
