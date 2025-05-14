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
import { title } from 'process';

  const listMenu = [
    {
        title: "Fil d’actualité",
        icon: <House size={20} />,
    },
    {
        title: "Amis",
        icon: <Users size={20} />,
    },
    {
        title: "Images",
        icon: <Images size={20} />,
    },
    {
        title: "Vidéos",
        icon: <Video size={20} />,
    },
    {
        title: "Notifications",
        icon: <BellDot size={20} />,
        counter: 12,
    },
    {
        title: "Evènements",
        icon: <CalendarDays size={20} />,
    }, 
    {
        title: "Marketplace",
        icon: <ShoppingCart size={20} />,
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
const MenuCard = () => {
  return (
    <div className='bg-white rounded-lg w-full flex-1 flex flex-col'>
      {listMenu.map((menu,index) =>(
        <div
          key={index}
          className='flex flex-row items-center gap-2 hover:bg-slate-300 p-4 rounded-md cursor-pointer justify-between'
        >
        <div className='flex items-center gap-2'>
          {menu.icon}
          <span className='text-sm text-gray-500'>{menu.title}</span>
        </div>
        {menu.counter && (
            <span className='text-xs text-red-500 ml-auto font-semibold'>
                {menu.counter}
            </span>
        )}
        </div>
      ))}
      
      <div className='pt-5 border-t border-gray-300'>
        <h3 className='pl-4'>LES PAGES QUE VOUS POUVEZ SUIVRE</h3>
        <div>
           {recommendation.map((item, index) =>(
            <div
            key={index}
            className='flex flex-row items-center gap-2 hover:bg-slate-300 p-4 rounded-md cursor-pointer'
            >
                <span className='bg-gray-600 w-10 h-10 flex items-center justify-center rounded-md'>
                    {item.icon}
                </span>
                <span className='text-sm text-gray-500'>{item.name}</span>
            </div>
           ))} 
        </div>
      </div>
    </div> 
  )
}

export default MenuCard
