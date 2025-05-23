import React, { useState } from "react";
import { FaRegImage, FaLink } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import Image from "next/image";
import assets from "@/src/constants/icons";
import NewPostModal from "../../post/NewPostModal";

const MenuCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postText, setPostText] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPostText("");
  };

  return (
    <div className="bg-white p-4 rounded-2xl">
      {/* Barre de saisie */}
      <div className="flex items-center gap-2 border-b border-gray-200 pb-4">
        <Image
          src={assets.EmptyUser}
          alt="story"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          placeholder="Quoi de neuf ?"
          className="flex-1 px-3 py-2 rounded-full border focus:outline-none cursor-pointer"
          onClick={openModal}
          readOnly
        />
        
      </div>

      {/* Options de publication */}
      <div className="flex justify-between items-center mt-3 text-gray-600">
        <button className="flex items-center gap-1 hover:text-blue-500" onClick={openModal}>
          <FaRegImage className="text-blue-500" />
          Image/Vidéo
        </button>
        <button className="flex items-center gap-1 hover:text-orange-500" onClick={openModal}>
          <FaLink className="text-orange-500" />
          Insérer un lien
        </button>
        <button className="flex items-center gap-1 hover:text-red-500" onClick={openModal}>
          <MdOutlineLiveTv className="text-red-500" />
          Live
        </button>
      </div>

      {/* Paramètres de confidentialité */}
      <div className="text-sm text-gray-500 mt-2 flex justify-between">
        <span>Publique ▼</span>
        <span>Publier par : <strong className="text-Green-500">Tout le monde 💚</strong></span>
      </div>

      {/* Modal pour créer une publication */}
      <NewPostModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
      />
    </div>
  );
};

export default MenuCard;