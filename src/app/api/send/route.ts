import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Get API key from environment variable
const apiKey = process.env.RESEND_API_KEY;

// Enhanced debugging
console.log('API Key available:', !!apiKey); // Log if API key is available (true/false)
console.log('API Key length:', apiKey ? apiKey.length : 0); // Log length of API key
console.log('API Key prefix:', apiKey ? apiKey.substring(0, 3) : 'none'); // Log first 3 chars of API key

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
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields', details: { name, email, message } },
        { status: 400 }
      );
    }

    // Set the recipient email
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'abhijit.sk@somaiya.edu';

    // Send the email using plain HTML instead of React Email components
    try {
      const result = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: [recipientEmail],
        subject: subject || `New message from ${name}`,
        reply_to: email,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0070f3;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
        `
      });
      
      // Return success response with the result
      return NextResponse.json({ success: true, data: result });
    } catch (error: any) {
      console.error('Unexpected error:', error);
      return NextResponse.json(
        { 
          error: 'An unexpected error occurred', 
          details: { 
            message: error.message || 'Unknown error',
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
          } 
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { 
        error: 'An unexpected error occurred', 
        details: { 
          message: error.message || 'Unknown error',
          stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        } 
      },
      { status: 500 }
    );
  }
}
