import React from 'react';
import SearchSection from './_components/SearchSection';
import TemplateSection from './_components/TemplateSection';

const Dashboard = () => {
  return (
    <div>
      {/* searcv section */}
      <SearchSection />
      {/* template list section */}
      <TemplateSection />
    </div>
  );
};

export default Dashboard;
