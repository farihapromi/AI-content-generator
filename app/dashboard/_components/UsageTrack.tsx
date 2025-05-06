'use client';
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';

import React, { useContext, useEffect } from 'react';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';

const UsageTrack = () => {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

  useEffect(() => {
    if (user && user.primaryEmailAddres?.emailAddress) {
      getData();
    }
  }, [user]);

  const getData = async () => {
    try {
      // Ensure email is defined before querying
      const result = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

      if (result.length === 0) {
        console.log('No data found for this user.');
        return;
      }

      getTotalUsage(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getTotalUsage = (result: AIOutput[]) => {
    let total = 0;
    result.forEach((element) => {
      if (element.aiResponse) {
        total += element.aiResponse.length;
      }
    });
    setTotalUsage(total);
    console.log('Total Usage:', total); // Check the computed total
  };

  return (
    <div className='m-5'>
      <div className='bg-primary text-white p-3 rounded-lg'>
        <h2 className='font-medium'>Credits</h2>
        <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
          <div
            className='h-2 bg-white rounded-full'
            style={{
              width: (totalUsage / 10000) * 100,
            }}
          ></div>
        </div>
        <h2 className='text-sm my-2'>{totalUsage}/10,000 credit usage</h2>
      </div>
      <Button variant={'secondary'} className='w-full my-3 text-primary'>
        Upgrade
      </Button>
    </div>
  );
};

export default UsageTrack;
