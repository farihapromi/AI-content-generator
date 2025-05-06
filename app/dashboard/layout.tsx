'use client';
import React, { useState } from 'react';
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import {
  UpdateCreditContex,
  UpdateCreditContext,
} from '../(context)/UpdateCreditContext';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const [upgradeCreditUsage, setUpgradeCreditUsage] = useState<any>();
  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UpdateCreditContext.Provider
        value={{ upgradeCreditUsage, setUpgradeCreditUsage }}
      >
        <div className='bg-slate-100 h-screen'>
          <div className='md:w-64 fixed  md:block hidden'>
            <SideNav />
          </div>
          <div className='md:ml-64'>
            <Header />

            {children}
          </div>
        </div>
      </UpdateCreditContext.Provider>
    </TotalUsageContext.Provider>
  );
};

export default layout;
