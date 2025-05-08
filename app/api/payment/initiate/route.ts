import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-10-16',
});

export async function POST(req: NextRequest) {
  try {
    const { plan, method } = await req.json();

    let amount: number;
    if (plan === 'Basic') amount = 500;
    else if (plan === 'Pro') amount = 1000;
    else throw new Error('Invalid plan');

    // Handle Visa using Stripe
    if (method === 'Visa') {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: { name: `${plan} Plan` },
              unit_amount: amount * 100, // cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: process.env.STRIPE_SUCCESS_URL!,
        cancel_url: process.env.STRIPE_CANCEL_URL!,
      });

      return NextResponse.json({ redirectUrl: session.url });
    }

    // Mock success for bKash/Nagad
    if (method === 'bKash') {
        return NextResponse.json({ redirectUrl: '/payment/bkash' });
      }
    if ( method === 'Nagad') {
      return NextResponse.json({ redirectUrl: '/payment/nagad' });
    }

    throw new Error('Unsupported payment method');
  } catch (error) {
    console.error('Payment error:', error);
    return NextResponse.json({ error: 'Unable to initiate payment' }, { status: 500 });
  }
}
