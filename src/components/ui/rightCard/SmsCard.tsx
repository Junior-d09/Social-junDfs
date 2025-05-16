
import { Search, MoreHorizontal } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import assets from "@/src/constants/icons";

const conversations = [
  { name: "Nina Kurt", message: "fringilla nisi ex consectetur Nam laoreet", avatar: "/assets/images/avatar1.jpg" },
  { name: "Florenda KONDO", message: "fringilla nisi ex consectetur Nam laoreet", avatar: "/assets/images/avatar2.jpg" },
  { name: "Luve Fibre", message: "fringilla nisi ex consectetur Nam laoreet", avatar: "/assets/images/avatar3.jpg" },
  { name: "Love Fibre", message: "fringilla nisi ex consectetur Nam laoreet", avatar: "/assets/images/avatar4.jpg" },
];

const onlineUsers = [
  { name: "Thomas Martin", lastSeen: "Il y a 5 min", avatar: "/assets/images/story.jpg", isActive: true },
  { name: "Sophie Dupont", lastSeen: "Il y a 2 min", avatar: "/assets/images/story.jpg", isActive: true },
  { name: "Jean Leclerc", lastSeen: "Il y a 1 heure", avatar: "/assets/images/story.jpg", isActive: false },
  { name: "Marie Lambert", lastSeen: "Il y a 10 min", avatar: "/assets/images/story.jpg", isActive: true },
];

const SmsCard = () => {
  const [activeTab, setActiveTab] = useState("messagerie");

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between p-3 border-b border-gray-200">
        <span className="text-[#07928e] font-semibold text-sm">Messages</span>
        <MoreHorizontal size={20} className="text-gray-500 cursor-pointer" />
      </div>
      
      <div className="p-3">
        <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md">
          <Search size={16} className="text-gray-500" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="bg-transparent outline-none text-sm flex-1"
          />
        </div>
      </div>
      
      {/* Tabs */}
      <div className="flex px-3 text-sm border-b border-gray-200">
        <span 
          className={`font-semibold cursor-pointer pb-2 mr-4 ${
            activeTab === "messagerie" 
              ? "text-[#07928e] border-b-2 border-[#07928e]" 
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("messagerie")}
        >
          Messagerie
        </span>
        <span 
          className={`cursor-pointer pb-2 ${
            activeTab === "online" 
              ? "text-[#07928e] border-b-2 border-[#07928e]" 
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("online")}
        >
          En ligne
        </span>
        <span className="text-[#07928e] text-xs ml-auto cursor-pointer">Filtrer</span>
      </div>
      
      {/* Conversation List or Online Users List - with hidden scrollbar */}
      <div className="overflow-y-auto flex-1 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {activeTab === "messagerie" ? (
          // Messagerie tab content
          conversations.map((chat, index) => (
            <div key={index} className="flex items-center p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
              <div className="flex-shrink-0 relative">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src={assets.EmptyUser} 
                    alt={`Avatar de ${chat.name}`}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="ml-3 flex-1 overflow-hidden">
                <p className="text-black font-semibold text-sm">{chat.name}</p>
                <p className="text-xs text-gray-500 truncate">{chat.message}</p>
              </div>
              <div className="flex flex-col items-end ml-2">
                <span className="text-xs text-gray-400 mb-1">12:45</span>
                <span className="bg-[#07928e] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </div>
            </div>
          ))
        ) : (
          // En ligne tab content
          onlineUsers.map((user, index) => (
            <div key={index} className="flex items-center p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
              <div className="flex-shrink-0 relative">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src={assets.EmptyUser} 
                    alt={`Avatar de ${user.name}`}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  {user.isActive && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
              </div>
              <div className="ml-3 flex-1 overflow-hidden">
                <div className="flex items-center justify-between">
                  <p className="text-black font-semibold text-sm">{user.name}</p>
                  {user.isActive && (
                    <span className="text-xs font-medium text-green-500">Actif</span>
                  )}
                </div>
                <p className="text-xs text-gray-500 truncate">{user.lastSeen}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SmsCard;