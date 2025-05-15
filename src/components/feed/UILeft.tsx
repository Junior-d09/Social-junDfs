import React from 'react';
import UserCard from '../ui/leftCard/UserCard';
import MenuCard from '../ui/leftCard/MenuCard';

const UILeft = () => {
  return (
   <div className='w-full h-full flex flex-col gap-3 overflow-y-auto scrollbar-hide pt-[72px]'>
      <UserCard />
      <MenuCard />
    </div>
  );
};

export default UILeft;