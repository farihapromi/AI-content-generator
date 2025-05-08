'use client';

import { useState } from 'react';
import Image from 'next/image';

const plans = [
  { name: 'Basic', price: 500 },
  { name: 'Pro', price: 1000 },
];

const paymentMethods = [
  { name: 'Visa', logo: '/visa.jpg' },
  { name: 'bKash', logo: '/bkash.png' },
  { name: 'Nagad', logo: '/nagad.jpg' },
];

export default function BillingPage() {
  const [plan, setPlan] = useState<string | null>(null);
  const [method, setMethod] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handlePayment = async () => {
    if (!plan || !method) {
      setErrorMsg('Please select a plan and payment method.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/payment/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, method }),
      });

      const data = await res.json();
      setLoading(false);

      if (data?.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        setErrorMsg('Payment failed. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      setErrorMsg('An unexpected error occurred.');
    }
  };

  return (
    <div className='max-w-xl mx-auto mt-10 p-4'>
      <h1 className='text-2xl font-bold mb-4'>Choose Your Plan</h1>
      <div className='space-y-2 mb-6 font-bold '>
        {plans.map((p) => (
          <button
            key={p.name}
            onClick={() => setPlan(p.name)}
            className={`w-full p-3 border rounded flex justify-between items-center font-bold hover:scale-105 transition-all ${
              plan === p.name ? 'bg-blue-100' : ''
            }`}
          >
            <span>{p.name}</span>
            <span>৳{p.price}</span>
          </button>
        ))}
      </div>

      <h2 className='text-xl font-semibold mb-2'>Select Payment Method</h2>
      <div className='space-y-2 mb-6'>
        {paymentMethods.map((m) => (
          <button
            key={m.name}
            onClick={() => setMethod(m.name)}
            className={`w-full p-3 border rounded flex items-center font-bold hover:scale-105 transition-all ${
              method === m.name ? 'bg-green-100' : ''
            }`}
          >
            <Image
              src={m.logo}
              alt={m.name}
              width={30}
              height={30}
              className='mr-3 rounded'
            />
            {m.name}
          </button>
        ))}
      </div>

      <button
        onClick={handlePayment}
        disabled={!plan || !method || loading}
        className='bg-green-600 text-white px-6 py-3 rounded w-full'
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>

      {errorMsg && (
        <p className='text-red-600 font-medium mt-4 text-center'>{errorMsg}</p>
      )}
    </div>
  );
}
