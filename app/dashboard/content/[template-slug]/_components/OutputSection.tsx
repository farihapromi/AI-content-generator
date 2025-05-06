import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
interface props {
  aiOutput: string;
}

const OutputSection = ({ aiOutput }: props) => {
  // Create a reference to access the Editor instance
  const editorRef: any = useRef();

  // Update the editor content whenever aiOutput changes
  useEffect(() => {
    const editorInstance = editorRef.current.getInstance(); // Get editor instance
    editorInstance.setMarkdown(aiOutput); // Set markdown content in editor
  }, [aiOutput]); // Run this effect every time aiOutput changes
  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='text-xl font-bold'>Your Result</h2>
        <Button
          className='flex gap-2'
          onClick={() => navigator.clipboard.writeText(aiOutput)} //copy buton to copy content
        >
          <Copy className='w-4 h-4' />
          Copy
        </Button>
      </div>{' '}
      {/* Toast UI Editor to display markdown output */}
      <Editor
        ref={editorRef}
        initialValue='Your result will appear here..'
        initialEditType='wysiwyg'
        height='600px'
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current.getInstance().getMarkdown())
        }
      />
    </div>
  );
};

export default OutputSection;
