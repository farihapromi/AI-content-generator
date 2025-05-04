'use client';
import React, { useState } from 'react';

import { TEMPLATE } from '@/app/dashboard/_components/TemplateSection';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Button } from '@/components/ui/button';
interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
}

const FormSection = ({ selectedTemplate, userFormInput }: PROPS) => {
  const [formData, setFormData] = useState<any>();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
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
          <div key={index} className='my-2 flex flex-col gap-2 mb-8'>
            <label className='font-bold text-sm'>{item.label}</label>
            {item.field == 'input' ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field == 'textarea' ? (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
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
