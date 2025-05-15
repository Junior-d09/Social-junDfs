import React from 'react';
import SmsCard from '../ui/rightCard/SmsCard';
import EventCard from '../ui/rightCard/EventCard';

const UIRight = () => {
  return (
    <div className='w-full h-full flex flex-col gap-3 pt-[72px]'>
      <div className='flex-1 overflow-y-auto scrollbar-hide'>
        <SmsCard />
      </div>
      <div className='h-[250px]'>
        <EventCard />
      </div>
    </div>
  );
};

export default UIRight;