
import React from "react";
import { FaRegImage, FaLink } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import Image from "next/image";
import assets from "@/src/constants/icons";


const MenuCard = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      {/* Barre de saisie */}
      <div className="flex items-center gap-2 border-b pb-3">
        <Image
          src={assets.EmptyUser}
          alt="story"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          placeholder="Quoi de neuf ?"
          className="flex-1 px-3 py-2 rounded-full border focus:outline-none"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded-full">
          Publier
        </button>
      </div>

      {/* Options de publication */}
      <div className="flex justify-between items-center mt-3 text-gray-600">
        <button className="flex items-center gap-1 hover:text-blue-500">
          <FaRegImage className="text-blue-500" />
          Image/Vidéo
        </button>
        <button className="flex items-center gap-1 hover:text-orange-500">
          <FaLink className="text-orange-500" />
          Insérer un lien
        </button>
        <button className="flex items-center gap-1 hover:text-red-500">
          <MdOutlineLiveTv className="text-red-500" />
          Live
        </button>
      </div>

      {/* Paramètres de confidentialité */}
      <div className="text-sm text-gray-500 mt-2 flex justify-between">
        <span>Publique ▼</span>
        <span>Publier par : <strong className="text-Green-500">Tout le monde 💚</strong></span>
      </div>
    </div>
  );
};

export default MenuCard;