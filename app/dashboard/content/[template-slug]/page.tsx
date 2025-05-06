'use client';
import Templates from '@/app/(data)/Templates';
import React, { useContext, useState } from 'react';
import FormSection from './_components/FormSection';

import OutputSection from './_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModel';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { useRouter } from 'next/navigation';
import { UpdateCreditContext } from '@/app/(context)/UpdateCreditContext';

interface PROPS {
  params: {
    'template-slug': string;
  };
}

const CreateNewContent = (props: PROPS) => {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  //getting user from clerk
  const { user } = useUser();
  const router = useRouter();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { upgradeCreditUsage, setUpgradeCreditUsage } =
    useContext(UpdateCreditContext);
  //filter seelcted tamplte
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === props.params['template-slug']
  );
  //generate Ai content
  //used to genrate content from ai

  const generateAiContent = async (formData: any) => {
    if (totalUsage >= 10000) {
      router.push('/dashboad/billing');
      console.log('Please Upgrade');
      return;
    }
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalAiPrompt = JSON.stringify(formData) + ',' + selectedPrompt;
    const result = await chatSession.sendMessage(finalAiPrompt);
    setAiOutput(result.response.text());
    //save output to db
    await saveInDb(formData, selectedTemplate?.slug, result.response.text());
    setLoading(false);
    //update word count
    setUpgradeCreditUsage(Date.now());
  };
  // save output to db
  const saveInDb = async (formData: any, slug: any, aiResp: string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format('DD/MM/YYYY'),
    });
    console.log(result);
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
