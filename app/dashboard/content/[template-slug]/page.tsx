'use client';
import Templates from '@/app/(data)/Templates';
import React, { useState } from 'react';
import FormSection from './_components/FormSection';

import OutputSection from './_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModel';
interface PROPS {
  params: {
    'template-slug': string;
  };
}

const CreateNewContent = (props: PROPS) => {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  //filter seelcted tamplte
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === props.params['template-slug']
  );
  //generate Ai content
  const generateAiContent = async (formData: any) => {
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalAiPrompt = JSON.stringify(formData) + ',' + selectedPrompt;
    const result = await chatSession.sendMessage(finalAiPrompt);
    setAiOutput(result.response.text());
    setLoading(false);
  };
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
          loading={loading}
        />
        {/* OutputSection */}
        <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
