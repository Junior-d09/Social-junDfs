import React from 'react';
import { CalendarDays, MapPin, Users } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Conférence Tech 2024",
    date: "25 Mai 2024",
    time: "14:00",
    location: "Paris, France",
    attendees: 150,
    image: "/assets/images/event1.jpg"
  },
  {
    id: 2,
    title: "Workshop Design UI/UX",
    date: "30 Mai 2024", 
    time: "10:00",
    location: "Lyon, France",
    attendees: 45,
    image: "/assets/images/event2.jpg"
  }
];

const EventsCard = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Évènements</h2>
      {events.map((event) => (
        <div key={event.id} className="p-4 bg-white rounded-lg border border-gray-200">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex flex-col items-center justify-center">
              <CalendarDays size={24} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{event.title}</h3>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <CalendarDays size={16} className="mr-1" />
                <span>{event.date} à {event.time}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <MapPin size={16} className="mr-1" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <Users size={16} className="mr-1" />
                <span>{event.attendees} participants</span>
              </div>
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                Participer
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsCard;