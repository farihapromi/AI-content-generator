'use client';
import React from 'react';

import { TEMPLATE } from '@/app/dashboard/_components/TemplateSection';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Button } from '@/components/ui/button';
interface PROPS {
  selectedTemplate?: TEMPLATE;
}

const FormSection = ({ selectedTemplate }: PROPS) => {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className='p-5 shadow-md border text-black rounded-lg bg-white'>
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt='icon' width={40} height={40} />
      <h2 className='font-bold text-2xl mb-2 text-primary'>
        {selectedTemplate?.name}
      </h2>
      <p className='text-slate-800 text-lg'>{selectedTemplate?.desc}</p>
      {/* form */}
      <form className='mt-6' onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          // render dynamcally form
          <div key={index} className='my-2 flex flex-col gap-4 mb-8'>
            <label className='font-bold text-sm'>{item.label}</label>
            {item.field == 'input' ? (
              <Input />
            ) : item.field == 'textarea' ? (
              <Textarea />
            ) : null}
          </div>
        ))}
        <Button type='submit' className='w-full py-6'>
          Generate Content
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
