import React from 'react';
import { TEMPLATE } from './TemplateSection';
import Image from 'next/image';

const TemplateCard = (item: TEMPLATE) => {
  return (
    <div className='p-5 shadow-md rounded-lg border bg-white flex flex-col'>
      <Image src={item.icon} alt='icon' width={50} height={50} />
      <h2>{item.name}</h2>
      <p>{item.desc}</p>
    </div>
  );
};

export default TemplateCard;
