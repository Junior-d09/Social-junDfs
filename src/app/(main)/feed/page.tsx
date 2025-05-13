"use client";
import React from 'react'
import UICenter from '@/src/components/feed/UICenter';
import UILeft from '@/src/components/feed/UILeft';
import UIRight from '@/src/components/feed/UIRight';

const page = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 p-4 h-screen max-w-[1600px] mx-auto'>
      {/* Colonne de gauche - réduite sur desktop, masquée sur mobile */}  
      <div className='hidden md:block md:w-[250px] lg:w-[280px] xl:w-[320px] flex-shrink-0 h-full'>
        <UILeft />
      </div>

      {/* Colonne centrale - pleine largeur sur mobile, adaptative sur desktop */}
      <div className='flex-1 h-full overflow-y-auto scrollbar-hide'>
        <UICenter />
      </div>

      {/* Colonne de droite - réduite sur desktop, masquée sur mobile */}
      <div className='hidden md:block md:w-[250px] lg:w-[280px] xl:w-[320px] flex-shrink-0 h-full'>
        <UIRight />
      </div>
    </div>
  );
};

export default page;