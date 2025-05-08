'use client';
import React, { useState } from 'react';
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UpdateCreditContext } from '../(context)/UpdateCreditContext';
import Footer from './_components/Footer';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const [upgradeCreditUsage, setUpgradeCreditUsage] = useState<number | null>(
    null
  );

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UpdateCreditContext.Provider
        value={{ upgradeCreditUsage, setUpgradeCreditUsage }}
      >
        <div className='bg-slate-100 min-h-screen'>
          {/* Sidebar */}
          <div className='md:w-64 fixed md:block hidden '>
            <SideNav />
          </div>

          {/* Main content */}
          <div className='md:ml-64'>
            <Header />
            <main>{children}</main>
          </div>

          {/* Footer with padding to avoid sidebar overlap */}
          <div className='w-full md:pl-64'>
            <Footer />
          </div>
        </div>
      </UpdateCreditContext.Provider>
    </TotalUsageContext.Provider>
  );
};

export default Layout;
