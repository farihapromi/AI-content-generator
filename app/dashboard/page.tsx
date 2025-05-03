'use client';
import React from 'react';
import SearchSection from './_components/SearchSection';
import TemplateSection from './_components/TemplateSection';
import { useState } from 'react';

const Dashboard = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>();
  return (
    <div>
      {/* searcv section */}
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />
      {/* template list section */}
      <TemplateSection userSearchInput={userSearchInput} />
    </div>
  );
};

export default Dashboard;
