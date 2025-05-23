import React from 'react';
import { UserPlus, MessageCircle, Users } from 'lucide-react';
import Image from 'next/image';
import assets from '@/src/constants/icons';

const friends = [
  {
    id: 1,
    name: "Alice Martin",
    username: "@alice_m",
    mutualFriends: 15,
    isOnline: true
  },
  {
    id: 2,
    name: "Bob Durant",
    username: "@bob_d", 
    mutualFriends: 8,
    isOnline: false
  },
  {
    id: 3,
    name: "Clara Dubois",
    username: "@clara_db",
    mutualFriends: 23,
    isOnline: true
  }
];

const FriendsCard = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Amis</h2>
      {friends.map((friend) => (
        <div key={friend.id} className="p-4 bg-white rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                  <Image
                    src={assets.EmptyUser}
                    alt={friend.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                {friend.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{friend.name}</h3>
                <p className="text-sm text-gray-600">{friend.username}</p>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <Users size={12} className="mr-1" />
                  <span>{friend.mutualFriends} amis en commun</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
                <MessageCircle size={16} />
              </button>
              <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200">
                <UserPlus size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendsCard;