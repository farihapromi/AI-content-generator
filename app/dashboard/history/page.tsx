import React from 'react';
export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

const page = () => {
  return <div>Histroy</div>;
};

export default page;
