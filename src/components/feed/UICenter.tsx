import React from 'react';
import StoryCard from '../ui/centerCard/StoryCard';
import ContenuCard from '../ui/centerCard/ContenuCard';
import MenuCard from '../ui/centerCard/MenuCard';

const UICenter = () => {
  return (
    <div className='flex-1 h-full flex flex-col bg-white shadow-lg overflow-y-auto scrollbar-hide'>
      <div className='w-full max-w-2xl mx-auto py-4 space-y-4 px-2 sm:px-4'>
        <StoryCard />
        <MenuCard />
        <ContenuCard />
      </div>
    </div>
  );
};

export default UICenter;