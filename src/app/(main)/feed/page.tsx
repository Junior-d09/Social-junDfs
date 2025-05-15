"use client";
import React, { useState, useEffect } from 'react'
import UICenter from '@/src/components/feed/UICenter';
import UILeft from '@/src/components/feed/UILeft';
import UIRight from '@/src/components/feed/UIRight';

const Page = () => {
  // État pour suivre la taille de l'écran
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  // États pour contrôler la visibilité des panneaux
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(true);

  useEffect(() => {
    // Initialiser la largeur de la fenêtre
    setWindowWidth(window.innerWidth);
    
    // Gérer le redimensionnement
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Logique pour déterminer quels panneaux afficher en fonction de la largeur
  useEffect(() => {
    if (windowWidth < 768) {
      // Mobile: masquer les deux panneaux
      setShowLeft(false);
      setShowRight(false);
    } else if (windowWidth < 1024) {
      // Tablette: afficher seulement le panneau de gauche
      setShowLeft(true);
      setShowRight(false);
    } else {
      // Desktop: afficher les deux panneaux
      setShowLeft(true);
      setShowRight(true);
    }
  }, [windowWidth]);

  // Fonctions pour basculer manuellement la visibilité
  const toggleLeftPanel = () => setShowLeft(!showLeft);
  const toggleRightPanel = () => setShowRight(!showRight);

  return (
    <div className='flex h-screen max-w-[1600px] mx-auto'>
      {/* Layout principal - toujours visible */}
      <div className='flex flex-col md:flex-row gap-4 p-4 w-full'>
        {/* Colonne de gauche - rétrécit progressivement */}
        <div className={`
          transition-all duration-300 ease-in-out
          ${showLeft ? 'md:block' : 'hidden'}
          md:w-[220px] lg:w-[280px] xl:w-[320px]
          flex-shrink h-full overflow-hidden
        `}>
          <UILeft />
        </div>

        {/* Colonne centrale - TOUJOURS visible avec taille minimale garantie */}
        <div className='flex-1 min-w-[320px] w-full h-full overflow-y-auto scrollbar-hide'>
          <UICenter />
        </div>

        {/* Colonne de droite - rétrécit progressivement */}
        <div className={`
          transition-all duration-300 ease-in-out
          ${showRight ? 'md:block' : 'hidden'}
          md:w-[220px] lg:w-[280px] xl:w-[320px]
          flex-shrink h-full overflow-hidden
        `}>
          <UIRight />
        </div>
      </div>

      {/* Boutons de contrôle qui restent toujours visibles */}
      <div className='fixed bottom-4 left-4 z-10 flex gap-2'>
        <button 
          onClick={toggleLeftPanel}
          className='bg-blue-500 text-white p-2 rounded-full shadow-lg md:hidden'
        >
          {showLeft ? 'Masquer menu' : 'Afficher menu'}
        </button>
      </div>

      <div className='fixed bottom-4 right-4 z-10'>
        <button 
          onClick={toggleRightPanel}
          className='bg-blue-500 text-white p-2 rounded-full shadow-lg md:hidden'
        >
          {showRight ? 'Masquer infos' : 'Afficher infos'}
        </button>
      </div>
    </div>
  );
};

export default Page;