import { Search, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import React from "react";
import assets from "@/src/constants/icons";

const conversations = [
  { name: "Nina Kurt", message: "fringilla nisi ex consectetur Nam laoreet", avatar: "/images/avatar1.png" },
  { name: "Florenda KONDO", message: "fringilla nisi ex consectetur Nam laoreet", avatar: "/images/avatar2.png" },
  { name: "Luve Fibre", message: "fringilla nisi ex consectetur Nam laoreet", avatar: "/images/avatar3.png" },
  { name: "Love Fibre", message: "fringilla nisi ex consectetur Nam laoreet", avatar: "/images/avatar4.png" },
];

const SmsCard = () => {
  return (
    <div className="bg-white rounded-lg w-full flex-1 flex flex-col shadow-md overflow-hidden">
      
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <span className="text-[#07928e] font-semibold text-sm">Messages</span>
        <MoreHorizontal size={20} className="text-gray-500 cursor-pointer" />
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="bg-transparent outline-none text-sm flex-1"
          />
        </div>
      </div>
      
      {/* Tabs */}
      <div className="flex px-4 text-sm border-b border-gray-200">
        <span className="text-[#07928e] font-semibold cursor-pointer border-b-2 border-[#07928e] pb-2 mr-4">
          Messagerie
        </span>
        <span className="text-gray-400 cursor-pointer pb-2">En ligne</span>
        <span className="text-[#07928e] text-xs ml-auto cursor-pointer">Filtrer</span>
      </div>
      
      {/* Conversation List */}
      <div className="overflow-y-auto flex-1">
        {conversations.map((chat, index) => (
          <div key={index} className="flex items-center p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
            <div className="flex-shrink-0">
              <Image src={assets.EmptyUser} alt="user" width={40} height={40} />
            </div>
            <div className="ml-3 overflow-hidden">
              <p className="text-black font-bold text-sm">{chat.name}</p>
              <p className="text-xs text-gray-500 truncate">{chat.message}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 text-center text-[#07928e] text-sm cursor-pointer hover:underline">
        Voir tout
      </div>
    </div>
  );
};

export default SmsCard;