'use client';
import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import UsageTrack from './UsageTrack';
import Link from 'next/link';

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
      name: 'Settings',
      icon: Settings,
      path: '/dashboard/settings',
    },
  ];
  const path = usePathname();
  useEffect(() => {}, []);
  return (
    <div className='h-screen p-5 shadow-sm border bg-white relative'>
      <div className='flex justify-center'>
        <Image src={'/logo2.svg'} alt='logo' height={70} width={70} />
      </div>
      <hr className='my-4 border' />
      <div className='mt-3'>
        {menuList.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <div
              className={`flex gap-2 mb-2 p-4 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${
                path === menu.path && 'bg-primary text-white'
              }`}
            >
              <menu.icon className='h-7 w-6' />
              <h2 className='text-lg'>{menu.name}</h2>
            </div>
          </Link>
        ))}
        <div className='absolute bottom-10 left-0 w-full'>
          <UsageTrack />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
