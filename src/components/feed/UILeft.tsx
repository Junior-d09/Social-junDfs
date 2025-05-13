import React from 'react';
import UserCard from '../ui/feedCard.tsx/UserCard';
import MenuCard from '../ui/feedCard.tsx/MenuCard';

const UILeft = () => {
  return (
    <div className='w-full h-full flex flex-col gap-3 overflow-y-auto scrollbar-hide'>
      <UserCard />
      <MenuCard />
    </div>
  );
};

export default UILeft;