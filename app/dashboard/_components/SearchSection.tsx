import { Search } from 'lucide-react';
import React from 'react';

const SearchSection = () => {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col items-center justify-center text-white'>
      <h2 className='text-3xl font-bold'>Browse All templates</h2>
      <p>What would you like to create today?</p>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded-lg bg-white my-5 w-[50%]'>
          <Search className='text-primary' />
          <input
            type='text'
            name=''
            id=''
            placeholder='Search'
            className='bg-transparent border-none focus:outline-none focus:ring-0 focus:border-transparent w-ful text-black'
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
