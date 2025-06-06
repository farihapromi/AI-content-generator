'use client';
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';

import React, { useContext, useEffect, useState } from 'react';
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditContext } from '@/app/(context)/UpdateCreditContext';
import { useRouter } from 'next/navigation';
import Templates from '@/app/(data)/Templates'; // Add this import at the top

const UsageTrack = () => {
  //get user information
  const { user } = useUser();
  const router = useRouter();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { upgradeCreditUsage, setUpgradeCreditUsage } =
    useContext(UpdateCreditContext);

  //count words
  // useEffect(() => {
  //   user && getData();
  // }, [user]);

  useEffect(() => {
    if (user && user.primaryEmailAddress?.emailAddress) {
      getData();
    }
  }, [user]);

  //for credit update
  useEffect(() => {
    getData();
  }, [upgradeCreditUsage]);

  const getData = async () => {
    const email = user?.primaryEmailAddress?.emailAddress;

    // Ensure the email is defined
    if (!email) return;

    const rawResult = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, email)); // Now `email` is definitely a string

    // Enrich result with `icon` field
    const result: HISTORY[] = rawResult.map((entry: any) => {
      const template = Templates.find((t) => t.slug === entry.templateSlug);
      return {
        ...entry,
        icon: template?.icon || '', // Add icon
      };
    });

    getTotalUsage(result);
  };

  const getTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach((element) => {
      // total = total + Number(element.aiResponse?.length);
      total += element.aiResponse?.trim().split(/\s+/).length || 0;
    });
    setTotalUsage(total);
    console.log(total);
  };

  return (
    <div className='m-5'>
      <div className='bg-primary text-white  p-3 rounded-lg'>
        <h2 className='font-medium'>Credits</h2>
        <div className='h-2 bg-[#9981f9] w-full roundd-full mt-3'>
          <div
            className='h-2 bg-white rounded-full'
            style={{
              width: (totalUsage / 100000) * 100 + '%',
            }}
          ></div>
        </div>
        <h2 className='text-sm my-2'>{totalUsage}/1,00,000 credit usage</h2>
      </div>
      <Button
        variant={'secondary'}
        className='w-full my-3 text-primary'
        onClick={() => router.push('/dashboard/billing')}
      >
        Upgrade
      </Button>
    </div>
  );
};

export default UsageTrack;
