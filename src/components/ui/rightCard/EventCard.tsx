import { CalendarSync } from "lucide-react";
import React from "react";

const events = [
  {
    name: "Evénement Rock",
    date: "20 février 2023",
    icon: <CalendarSync className="w-5 h-5 text-[#07928e]" />,
  },
  {
    name: "Evénement www",
    date: "20 février 2023",
    icon: <CalendarSync className="w-5 h-5 text-[#07928e]" />,
  },
  {
    name: "Evénement dfs",
    date: "20 février 2023",
    icon: <CalendarSync className="w-5 h-5 text-[#07928e]" />,
  },
];

const EventCard = () => {
  return (
    <div className="bg-white rounded-lg w-full h-[250px] p-4 flex flex-col">
      <div className="w-full h-full rounded-md p-4 flex flex-col gap-3">
        <div className="flex flex-col items-center gap-3 border-b border-gray-200 pb-3">
          <span className="text-[#07928e] font-semibold text-sm">Événements</span>
        </div>

        <div className="pt-3 flex-grow">
          {events.map((event, index) => (
            <div
            key={index}
            className="flex flex-row items-center gap-2 hover:bg-slate-200 p-4 rounded-md cursor-pointer justify-between"
          >
            <div className="flex items-center gap-2">
              {event.icon} 
              <span className="text-black text-sm font-semibold">{event.name}</span>
                </div> 
              <span className="text-sm text-gray-600">{event.date}</span>
            </div>
          ))}
        </div>

      
        <div className="flex-grow"></div>
      </div>
    </div>
  );
};

export default EventCard;