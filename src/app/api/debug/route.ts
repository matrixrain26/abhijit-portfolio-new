import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    apiKeyExists: !!process.env.RESEND_API_KEY,
    apiKeyLength: process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.length : 0,
    apiKeyPrefix: process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.substring(0, 3) : 'none',
    recipientEmail: process.env.RECIPIENT_EMAIL || 'default: abhijit.sk@somaiya.edu',
    nodeEnv: process.env.NODE_ENV,
  });
}
