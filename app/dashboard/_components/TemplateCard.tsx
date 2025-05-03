import React from 'react';
import { TEMPLATE } from './TemplateSection';
import Image from 'next/image';
import Link from 'next/link';

const TemplateCard = (item: TEMPLATE) => {
  return (
    <Link href={'/dashboard/content/' + item?.slug}>
      <div className='p-5 shadow-md rounded-lg border bg-white flex flex-col gap-3 cursor-pointer  hover:scale-105 transition-all '>
        <Image src={item.icon} alt='icon' width={50} height={50} />
        <h2 className='font-medium text-lg'>{item.name}</h2>
        <p className='text-gray-700 line-clamp-3 flex-grow'>{item.desc}</p>{' '}
        {/* This will push the content to take available space */}
      </div>
    </Link>
  );
};

export default TemplateCard;
