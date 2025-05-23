import React from 'react';
import { Heart, MessageCircle, Download } from 'lucide-react';

const images = [
  {
    id: 1,
    src: "/assets/images/photo1.jpg",
    title: "Coucher de soleil magnifique",
    author: "PhotoPro",
    likes: 245,
    comments: 12
  },
  {
    id: 2,
    src: "/assets/images/photo2.jpg", 
    title: "Architecture moderne",
    author: "ArchitectGuru",
    likes: 189,
    comments: 8
  },
  {
    id: 3,
    src: "/assets/images/photo3.jpg",
    title: "Nature sauvage",
    author: "NatureLover", 
    likes: 156,
    comments: 5
  }
];

const ImagesCard = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Images</h2>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image) => (
          <div key={image.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="w-full h-48 bg-gray-200"></div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-800 text-sm mb-1">{image.title}</h3>
              <p className="text-xs text-gray-600 mb-2">Par {image.author}</p>
              <div className="flex items-center justify-between text-xs text-gray-600">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <Heart size={14} className="mr-1" />
                    <span>{image.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle size={14} className="mr-1" />
                    <span>{image.comments}</span>
                  </div>
                </div>
                <Download size={14} className="cursor-pointer hover:text-blue-600" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesCard;