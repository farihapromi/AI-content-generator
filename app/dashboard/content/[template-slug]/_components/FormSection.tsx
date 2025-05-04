import React from 'react';
import { TEMPLATE } from '@/app/dashboard/_components/TemplateSection';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
interface PROPS {
  selectedTemplate?: TEMPLATE;
}

const FormSection = ({ selectedTemplate }: PROPS) => {
  return (
    <div className='p-5 shadow-md border text-black rounded-lg'>
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt='icon' width={40} height={40} />
      <h2 className='font-bold text-2xl mb-2 text-primary'>
        {selectedTemplate?.name}
      </h2>
      <p className='text-gray-500 text-lg'>{selectedTemplate?.desc}</p>
      {/* form */}
      <form>
        {selectedTemplate?.form?.map((item, index) => (
          // render dynamcally form
          <div key={index}>
            <label>{item.label}</label>
            {item.field == 'input' ? (
              <Input />
            ) : item.field == 'textarea' ? (
              <Textarea />
            ) : null}
          </div>
        ))}
      </form>
    </div>
  );
};

export default FormSection;
