import React, { useEffect, useState } from 'react';

import { Editor } from '@tinymce/tinymce-react';
import { Button } from '@/components/ui/button';
import { Copy, CheckCircle } from 'lucide-react';

interface OutputSectionProps {
  aiOutput: string;
}

const OutputSection: React.FC<OutputSectionProps> = ({ aiOutput }) => {
  const [htmlContent, setHtmlContent] = useState('');
  const [isCopied, setIsCopied] = useState(false); // State to track if copied

  useEffect(() => {
    if (aiOutput) {
      // Convert plain text to HTML (adjust this based on your formatting needs)
      const processedContent = convertPlainTextToHtml(aiOutput);
      setHtmlContent(processedContent);
    }
  }, [aiOutput]);

  // Convert plain text to simple HTML (you can customize this to suit more complex cases)
  const convertPlainTextToHtml = (text: string) => {
    // Replace newlines with paragraph tags
    let formattedText = text.replace(/\n/g, '</p><p>');
    formattedText = `<p>${formattedText}</p>`; // Wrap with outer <p> tags

    // Handle bold text
    formattedText = formattedText.replace(
      /\*\*(.*?)\*\*/g,
      '<strong>$1</strong>'
    );
    // Handle links
    formattedText = formattedText.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank">$1</a>'
    );

    return formattedText;
  };

  // Handle the copy action
  const handleCopy = () => {
    navigator.clipboard.writeText(aiOutput).then(() => {
      setIsCopied(true); // Set copied state to true
      // Reset to "Copy" after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='text-xl font-bold'>Your Result</h2>
        <Button className='flex gap-2' onClick={handleCopy}>
          {isCopied ? (
            <>
              <CheckCircle
                className='w-4 h-4 text-white
            '
              />
              Copied
            </>
          ) : (
            <>
              <Copy className='w-4 h-4' />
              Copy
            </>
          )}
        </Button>
      </div>

      {/* TinyMCE editor to render the content */}
      <Editor
        apiKey='bixzm0ojw6u6m6vhmmi20p9w4jczn4k7bar4vyffipfo9zvf' // Ensure you use your TinyMCE API key here
        value={htmlContent}
        init={{
          height: 500,
          menubar: false,
          plugins: ['link', 'lists', 'image'],
          toolbar:
            'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }',
        }}
        onEditorChange={(newContent) => setHtmlContent(newContent)} // Update content on change
      />
    </div>
  );
};

export default OutputSection;
