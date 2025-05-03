import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const SideNav = () => {
  const menuList = [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard',
    },
    {
      name: 'History',
      icon: FileClock,
      path: '/dashboard/history',
    },
    {
      name: 'Billing',
      icon: WalletCards,
      path: '/dashboard/billing',
    },
    {
      name: 'Seting',
      icon: Settings,
      path: '/dashboard/setting',
    },
  ];
  return (
    <div className='h-screen p-5 shadow-sm border'>
      <div className='flex justify-center'>
        <Image src={'/logo.svg'} alt='logo' height={50} width={50} />
      </div>
    </div>
  );
};

export default SideNav;
