'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function NagadPaymentPage() {
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
    <div className='min-h-screen flex flex-col items-center justify-center bg-orange-50 px-4 text-center'>
      <h1 className='text-3xl font-bold text-orange-600 mb-6'>Nagad Payment</h1>
      <p className='text-lg mb-4'>Merchant: AI Content Generator</p>
      <div className='bg-white shadow-lg rounded-xl p-6 w-full max-w-sm'>
        <p className='text-gray-600 mb-4'>Amount: ৳500</p>

        <input
          type='text'
          placeholder='Enter Nagad Account Number'
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
          className='bg-orange-600 text-white px-6 py-2 rounded w-full hover:bg-orange-700 transition-all'
        >
          {processing ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </div>
  );
}
