import React from 'react';
import UILeft from './feed/UILeft';
import UICenter from './feed/UICenter';
import UIRight from './feed/UIRight';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar gauche - caché sur mobile, visible sur tablette et + */}
      <div className="hidden md:block md:flex-shrink-0 p-2 overflow-hidden">
        <UILeft />
      </div>
      
      {/* Centre - toujours visible, s'adapte en largeur */}
      <div className="flex-grow overflow-hidden p-2">
        {children || <UICenter />}
      </div>
      
      {/* Sidebar droite - caché sur mobile et tablette, visible sur desktop */}
      <div className="hidden lg:block lg:flex-shrink-0 p-2 overflow-hidden">
        <UIRight />
      </div>
    </div>
  );
};

export default MainLayout;