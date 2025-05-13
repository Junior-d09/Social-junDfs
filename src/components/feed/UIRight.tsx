import React from 'react';
import SmsCard from '../ui/rightCard/SmsCard';
import EventCard from '../ui/rightCard/EventCard';

const UIRight = () => {
  return (
    <div className='w-full md:w-[280px] lg:w-[320px] xl:w-[375px] h-full flex flex-col gap-3'>
      <div className='flex-1 overflow-y-auto'>
        <SmsCard />
      </div>
      <div className='h-[250px]'>
        <EventCard />
      </div>
    </div>
  );
};

export default UIRight;