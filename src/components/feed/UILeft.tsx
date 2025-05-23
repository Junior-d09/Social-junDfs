import React from 'react';
import UserCard from '../ui/leftCard/UserCard'; 
import MenuCard from '../ui/leftCard/MenuCard'; 
import { FeedView } from '@/src/types/feedTypes';

interface UILeftProps {
  onViewChange: (view: FeedView) => void;
  currentView: FeedView;
}

const UILeft = ({ onViewChange, currentView }: UILeftProps) => {
  return (
    <div className="flex flex-col gap-4 h-full pt-[50px]">
      <div className="flex-shrink-0">
        <UserCard />
      </div>
      <div className="flex-1 min-h-0">
        <MenuCard onViewChange={onViewChange} currentView={currentView} />
      </div>
    </div>
  );
};

export default UILeft;