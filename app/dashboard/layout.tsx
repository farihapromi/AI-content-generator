import React from 'react';
import SideNav from './_components/SideNav';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className='md:w-64 fixed  md:block hidden'>
        <SideNav />
      </div>
      <div className='md:ml-64'>{children}</div>
    </div>
  );
};

export default layout;
