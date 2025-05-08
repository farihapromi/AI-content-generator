'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function BkashPaymentPage() {
  const router = useRouter();
  const [processing, setProcessing] = useState(false);

  const handlePay = () => {
    setProcessing(true);
    toast.success('Payment Successful!');
    setTimeout(() => {
      router.push('/dashboard');
    }, 2000);
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-pink-50 text-center px-4'>
      <h1 className='text-3xl font-bold text-pink-600 mb-6'>bKash Payment</h1>
      <p className='text-lg mb-4'>Merchant: AI Content Generator</p>
      <div className='bg-white shadow-lg rounded-xl p-6 w-full max-w-sm'>
        <p className='text-gray-600 mb-4'>Amount: ৳500</p>
        <input
          type='text'
          placeholder='Enter bKash Account Number'
          className='w-full border px-4 py-2 rounded mb-4'
        />
        <input
          type='password'
          placeholder='Enter PIN'
          className='w-full border px-4 py-2 rounded mb-6'
        />
        <button
          onClick={handlePay}
          disabled={processing}
          className='bg-pink-600 text-white px-6 py-2 rounded w-full hover:bg-pink-700 transition-all'
        >
          {processing ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </div>
  );
}
