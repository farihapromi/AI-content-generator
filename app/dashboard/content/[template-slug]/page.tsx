import Templates from '@/app/(data)/Templates';
import React from 'react';
import FormSection from '../../_components/FormSection';
import OutputSection from '../../_components/OutputSection';
interface PROPS {
  params: {
    'template-slug': string;
  };
}

const CreateNewContent = (props: PROPS) => {
  //filter seelcted tamplte
  const selectedTemplate: TEMPLATE = Templates?.find(
    (item) => item.slug === props.params['template-slug']
  );
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap -4 p-5'>
      {/* FormSection */}
      <FormSection selectedTemplate={selectedTemplate} />
      {/* OutputSection */}
      <OutputSection />
    </div>
  );
};

export default CreateNewContent;
