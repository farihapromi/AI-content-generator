'use client';
import Templates from '@/app/(data)/Templates';
import React from 'react';
import FormSection from './_components/FormSection';

import OutputSection from './_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateSection';
interface PROPS {
  params: {
    'template-slug': string;
  };
}

const CreateNewContent = (props: PROPS) => {
  //filter seelcted tamplte
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === props.params['template-slug']
  );
  //generate Ai content
  const generateAiContent = (formData: any) => {};
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap -4 p-5'>
      {/* FormSection */}
      <FormSection
        selectedTemplate={selectedTemplate}
        userFormInput={(v: any) => generateAiContent(v)}
      />
      {/* OutputSection */}
      <div className='col-span-2'>
        <OutputSection />
      </div>
    </div>
  );
};

export default CreateNewContent;
