import Templates from '@/app/(data)/Templates';
import React from 'react';
//type defination
export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  categoty: string;
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
        <h2>{item.aiPrompt}</h2>
      ))}
    </div>
  );
};

export default TemplateSection;
