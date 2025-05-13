import React from 'react';
import UserCard from '../ui/feedCard.tsx/UserCard';
import MenuCard from '../ui/feedCard.tsx/MenuCard';

const UILeft = () => {
  return (
    <div className='w-full md:w-[280px] lg:w-[320px] xl:w-[375px] h-full flex flex-col gap-3 overflow-y-auto'>
      <UserCard />
      <MenuCard />
    </div>
  );
};

export default UILeft;