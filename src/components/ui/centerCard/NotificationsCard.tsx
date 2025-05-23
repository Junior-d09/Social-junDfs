import React from 'react';
import { Heart, MessageCircle, UserPlus, Calendar, Bell } from 'lucide-react';
import Image from 'next/image';
import assets from '@/src/constants/icons';

const notifications = [
  {
    id: 1,
    type: 'like',
    user: 'Marie Dupont',
    action: 'a aimé votre publication',
    time: 'Il y a 2 min',
    read: false
  },
  {
    id: 2,
    type: 'comment', 
    user: 'Jean Martin',
    action: 'a commenté votre photo',
    time: 'Il y a 1h',
    read: false
  },
  {
    id: 3,
    type: 'friend',
    user: 'Sophie Moreau',
    action: 'a accepté votre demande d\'ami',
    time: 'Il y a 3h',
    read: true
  },
  {
    id: 4,
    type: 'event',
    user: 'Tech Conference',
    action: 'commence dans 2 jours',
    time: 'Il y a 5h',
    read: true
  }
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'like':
      return <Heart size={16} className="text-red-500" />;
    case 'comment':
      return <MessageCircle size={16} className="text-blue-500" />;
    case 'friend':
      return <UserPlus size={16} className="text-green-500" />;
    case 'event':
      return <Calendar size={16} className="text-purple-500" />;
    default:
      return <Bell size={16} className="text-gray-500" />;
  }
};

const NotificationsCard = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Notifications</h2>
      {notifications.map((notification) => (
        <div 
          key={notification.id} 
          className={`p-4 rounded-lg border ${
            notification.read ? 'bg-white border-gray-200' : 'bg-blue-50 border-blue-200'
          }`}
        >
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 relative rounded-full overflow-hidden">
              <Image
                src={assets.EmptyUser}
                alt={notification.user}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                {getNotificationIcon(notification.type)}
                <span className="text-sm">
                  <span className="font-semibold">{notification.user}</span>
                  {' '}{notification.action}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
            </div>
            {!notification.read && (
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationsCard;
