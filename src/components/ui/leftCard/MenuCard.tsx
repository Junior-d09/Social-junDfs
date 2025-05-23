import React from 'react'
import {
    House,
    Users,
    Images,
    Video,
    BellDot,
    CalendarDays,
    Ticket,
    Shield,
    Sunset,
    ShoppingCart,
} from "lucide-react";
import { FeedView } from "@/src/types/feedTypes";

interface MenuCardProps {
  onViewChange: (view: FeedView) => void;
  currentView: FeedView;
}

const listMenu = [
  {
    title: "Fil d'actualité",
    icon: <House size={20} />,
    view: 'feed' as FeedView,
  },
  {
    title: "Amis",
    icon: <Users size={20} />,
    view: 'friends' as FeedView,
  },
  {
    title: "Images",
    icon: <Images size={20} />,
    view: 'images' as FeedView,
  },
  {
    title: "Vidéos",
    icon: <Video size={20} />,
    view: 'videos' as FeedView,
  },
  {
    title: "Notifications",
    icon: <BellDot size={20} />,
    counter: 12,
    view: 'notifications' as FeedView,
  },
  {
    title: "Evènements",
    icon: <CalendarDays size={20} />,
    view: 'events' as FeedView,
  }, 
  {
    title: "Marketplace",
    icon: <ShoppingCart size={20} />,
    view: 'marketplace' as FeedView,
  },
];

const recommendation = [
  {
    name: "Behance Group",
    icon: <Ticket size={25} color="#fff" />,
  },
  {
    name: "Dribbble club Designer",
    icon: <Shield size={25} color="#fff" />,
  },
  {
    name: "Web Design Community",
    icon: <Sunset size={25} color="#fff" />,
  },
]

const MenuCard = ({ onViewChange, currentView }: MenuCardProps) => {
  return (
    <div className='bg-white rounded-lg w-full h-full flex flex-col p-2 overflow-y-auto'>
      <div className="flex-shrink-0">
        {listMenu.map((menu, index) => (
          <div
            key={index}
            onClick={() => onViewChange(menu.view)}
            className={`flex flex-row items-center gap-2 px-3 py-2 md:px-4 md:py-3 rounded-md cursor-pointer justify-between transition-colors duration-200 ${
              currentView === menu.view 
                ? 'bg-blue-100 border-l-4 border-blue-500' 
                : 'hover:bg-slate-300'
            }`}
          >
            <div className='flex items-center gap-2 min-w-0'>
              <span className={`flex-shrink-0 ${currentView === menu.view ? 'text-blue-600' : ''}`}>
                {menu.icon}
              </span>
              <span className={`text-xs md:text-sm truncate ${
                currentView === menu.view ? 'text-blue-600 font-semibold' : 'text-gray-500'
              }`}>
                {menu.title}
              </span>
            </div>
            {menu.counter && (
              <span className='text-xs text-red-500 ml-auto font-semibold flex-shrink-0'>
                {menu.counter}
              </span>
            )}
          </div>
        ))}
      </div>
      
      <div className='pt-3 mt-3 border-t border-gray-300 flex-shrink-0'>
        <h3 className='px-3 pb-2 text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wide'>
          Pages à suivre
        </h3>
        <div>
          {recommendation.map((item, index) => (
            <div
              key={index}
              className='flex flex-row items-center gap-2 hover:bg-slate-300 px-3 py-2 md:px-4 md:py-3 rounded-md cursor-pointer'
            >
              <span className='bg-gray-600 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-md flex-shrink-0'>
                {item.icon}
              </span>
              <span className='text-xs md:text-sm text-gray-500 truncate'>{item.name}</span>
            </div>
          ))} 
        </div>
      </div>
    </div> 
  )
}

export default MenuCard