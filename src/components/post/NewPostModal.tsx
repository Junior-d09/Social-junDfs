import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,

} from "@/src/components/ui/dialog";
import Image from "next/image";
import React, { useState } from "react";
import assets from "@/src/constants/icons";
import { FaRegImage } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";

interface NewPostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

bconst NewPostModal = ({ isOpen, onClose }: NewPostModalProps) => {
  const [postText, setPostText] = useState("");

  const handleSubmit = () => {
    console.log("Post soumis", postText);
    setPostText("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center border-b pb-4">
            {" "}
            Créer un publication
          </DialogTitle>
         
        </DialogHeader>

        <div className="flex items--center gap-2 mt-2">
          <Image
            src={assets.EmptyUser}
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">Junior Dofonsou</p>
            <div className="bg-gray-200 text-sm px-2 py-1 rounded-full flex items-center gap-1">
              <span className="h-2 w-2  rounded-sm"></span>
              🌍Public
            </div>
          </div>
        </div>

        <div className="mt-4">
          <textarea
            placeholder="Quoi de neuf ?"
            className="w-full min-h-24 text-lg border-none focus:outline-none resize-none"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>

        <div className="border rounded-lg p-3 mt-2">
          <div className="fle justify-between items-center">
            <p className="font-medium">Ajouter à votre publication</p>
          </div>
          <div className="flex justify-between mt-2">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <FaRegImage className="text-green-500 text-xl" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <IoLocationOutline className="text-red-500 text-xl" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <BsEmojiSmile className="text-yellow-500 text-xl" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <span className="text-gray-500 text-xl">...</span>
            </button>
          </div>
        </div>

        <div className="mt-4">
          <button
            className={`w-full py-2 rounded-lg font-medium ${
              postText.trim()
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!postText.trim()}
            onClick={handleSubmit}
          >
            Publier
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewPostModal;
