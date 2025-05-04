import React from 'react';
import { TEMPLATE } from '@/app/dashboard/_components/TemplateSection';
import Image from 'next/image';
interface PROPS {
  selectedTemplate?: TEMPLATE;
}

const FormSection = ({ selectedTemplate }: PROPS) => {
  return (
    <div className='p-5 shadow-md border text-black rounded-lg'>
      <Image src={selectedTemplate?.icon} alt='icon' width={40} height={40} />
      {selectedTemplate?.name}
    </div>
  );
};

export default FormSection;
