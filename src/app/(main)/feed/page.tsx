"use client";
import React from 'react'
import UICenter from '@/src/components/feed/UICenter';
import UILeft from '@/src/components/feed/UILeft';
import UIRight from '@/src/components/feed/UIRight';

const page = () => {
  return (
    <div className='flex flex-row gap-4 p-4 h-screen'>
    {/* Colonne de gauche fixe */}  
      <div className='w-[375px] flex-shrink-0 h-full'>
        <UILeft />
      </div>

    {/* Colonne de droite fixe */}
      <div className='flex-1 h-full overflow-y-auto'>
        <UICenter />
      </div>

    {/* Colonne de droite fixe */}
      <div className='w-[375px] flex-shrink-0 h-full'>
        <UIRight />
      </div>
    </div>
  );
};

export default page