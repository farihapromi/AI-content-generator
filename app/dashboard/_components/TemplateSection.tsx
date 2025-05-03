import Templates from '@/app/(data)/Templates';
import React from 'react';
import TemplateCard from './templateCard';
//type defination
export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}
export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

const TemplateSection = () => {
  return (
    <div>
      {Templates.map((item: TEMPLATE, index: number) => (
        <div key={index}>
          <TemplateCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default TemplateSection;
