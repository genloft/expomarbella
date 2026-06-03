import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Here you would normally integrate with Mailchimp API.
    // e.g. const response = await fetch('https://<dc>.api.mailchimp.com/3.0/lists/<list_id>/members', { ... });
    
    console.log(`Simulating subscription for: ${email}`);

    // Mock successful response
    return NextResponse.json(
      { message: 'Subscription successful' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
