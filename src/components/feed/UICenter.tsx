import React from 'react';
import StoryCard from '../ui/centerCard/StoryCard';
import MenuCard from '../ui/centerCard/MenuCard';
import ContenuCard from '../ui/centerCard/ContenuCard';
import EventsCard from '../ui/centerCard/EventsCard';
import VideosCard from '../ui/centerCard/VideoCard';
import ImagesCard from '../ui/centerCard/ImagesCard';
import FriendsCard from '../ui/centerCard/FriendsCard';
import NotificationsCard from '../ui/centerCard/NotificationsCard';
import MarketplaceCard from '../ui/centerCard/MarketplaceCard';
import { FeedView } from '@/src/types/feedTypes';

interface UICenterProps {
  currentView: FeedView;
}

const UICenter = ({ currentView }: UICenterProps) => {
  const renderContent = () => {
    switch (currentView) {
      case 'feed':
        return (
          <div className="space-y-4 w-full h-full  gap-3 pt-[50px]">
            <StoryCard />
            <MenuCard />
            <ContenuCard />
          </div>
        );
      case 'events':
        return <EventsCard />;
      case 'videos':
        return <VideosCard />;
      case 'images':
        return <ImagesCard />;
      case 'friends':
        return <FriendsCard />;
      case 'notifications':
        return <NotificationsCard />;
      case 'marketplace':
        return <MarketplaceCard />;
      default:
        return (
          <div className="space-y-4">
            <StoryCard />
            <MenuCard />
            <ContenuCard />
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full px-2 md:px-0">
      {renderContent()}
    </div>
  );
};

export default UICenter;