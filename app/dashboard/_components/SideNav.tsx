import Image from 'next/image';
import React from 'react';

const SideNav = () => {
  return (
    <div>
      <Image src={'/logo.svg'} alt='logo' height={100} width={100} />
    </div>
  );
};

export default SideNav;
