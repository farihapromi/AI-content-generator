'use client';
import Templates from '@/app/(data)/Templates';
import React from 'react';
import FormSection from './_components/FormSection';

import OutputSection from './_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
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
    <div className='p-10'>
      <Link href='/dashboard'>
        <Button>
          {' '}
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-5'>
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
    </div>
  );
};

export default CreateNewContent;
