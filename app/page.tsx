'use client';

import React from 'react';
import Link from 'next/link';
import Templates from './(data)/Templates';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Footer from './dashboard/_components/Footer';

const HomePage = () => {
  const router = useRouter();

  return (
    <div className='min-h-screen flex flex-col bg-slate-100'>
      {/* Main content */}
      <div className='flex-grow py-10'>
        {/* Title Section */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-800'>
            AI Content Generation Tools
          </h1>
          <p className='text-lg text-gray-600 mt-4'>
            Choose a tool to get started
          </p>
        </div>

        {/* Category Cards */}
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {Templates.map((template) => (
              <div
                key={template.slug}
                onClick={() => router.push('/dashboard')}
                className='cursor-pointer bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300'
              >
                <Image
                  src={template.icon}
                  alt={template.name}
                  className='mx-auto mb-4'
                  height={64}
                  width={64}
                />
                <h3 className='text-2xl font-semibold text-gray-800 text-center'>
                  {template.name}
                </h3>
                <p className='text-gray-600 mt-2 text-center'>
                  {template.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Go to Dashboard Button */}
        <div className='mt-10 text-center'>
          <Link
            href='/dashboard'
            className='bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300'
          >
            Go to Dashboard
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
