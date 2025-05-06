'use client';

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import moment from 'moment';
import Link from 'next/link';

export interface HISTORY {
  id: number;
  templateSlug: string;
  formData: string;
  aiResponse: string;
  createdBy: string;
  createdAt: string;
}

const HistoryPage = () => {
  const [history, setHistory] = useState<HISTORY[]>([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchHistory = async () => {
      const email = user?.primaryEmailAddress?.emailAddress;
      if (!email) return;

      const result = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, email));

      setHistory(result);
    };

    fetchHistory();
  }, [user]);

  return (
    <div className='p-10'>
      <h1 className='text-3xl font-bold mb-6'>History</h1>
      <p className='text-gray-500 mb-4'>
        Search your previously generated AI content
      </p>
      <div className='overflow-x-auto rounded-xl shadow border border-gray-200'>
        <table className='min-w-full divide-y divide-gray-200 text-sm'>
          <thead className='bg-gray-50 text-left font-semibold text-gray-700'>
            <tr>
              <th className='px-6 py-4'>TEMPLATE</th>
              <th className='px-6 py-4'>AI RESP</th>
              <th className='px-6 py-4'>DATE</th>
              <th className='px-6 py-4'>WORDS</th>
              <th className='px-6 py-4'>EDIT</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100'>
            {history.map((entry) => (
              <tr key={entry.id} className='hover:bg-gray-50'>
                <td className='px-6 py-4 whitespace-nowrap capitalize'>
                  {getTemplateIcon(entry.templateSlug)}{' '}
                  {entry.templateSlug.replace(/-/g, ' ')}
                </td>
                <td className='px-6 py-4 max-w-xs truncate'>
                  {entry.aiResponse}
                </td>
                <td className='px-6 py-4'>
                  {moment(entry.createdAt, 'DD/MM/YYYY').format('DD/MM/YYYY')}
                </td>
                <td className='px-6 py-4'>
                  {entry.aiResponse.trim().split(/\s+/).length}
                </td>
                <td className='px-6 py-4 text-indigo-600 underline'>
                  <Link href={`/dashboard/edit/${entry.id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Dummy icon logic – replace with actual mapping if needed
function getTemplateIcon(slug: string) {
  if (slug.includes('youtube')) return '📺';
  if (slug.includes('emoji')) return '😊';
  if (slug.includes('hashtag')) return '🏷️';
  return '🧠';
}

export default HistoryPage;
