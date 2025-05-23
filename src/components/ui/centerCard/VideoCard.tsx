import React from 'react';
import { Play, Eye, ThumbsUp } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "Tutoriel React Avancé",
    thumbnail: "/assets/images/video1.jpg",
    duration: "15:30",
    views: "12K",
    likes: "850",
    author: "Tech Guru"
  },
  {
    id: 2,
    title: "Design System avec Figma", 
    thumbnail: "/assets/images/video2.jpg",
    duration: "22:45",
    views: "8.5K",
    likes: "620", 
    author: "Design Pro"
  }
];

const VideosCard = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Vidéos</h2>
      {videos.map((video) => (
        <div key={video.id} className="p-4 bg-white rounded-lg border border-gray-200">
          <div className="relative mb-3">
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center relative">
              <Play size={48} className="text-white" />
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                {video.duration}
              </div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">{video.title}</h3>
          <p className="text-sm text-gray-600 mb-2">Par {video.author}</p>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Eye size={16} className="mr-1" />
                <span>{video.views} vues</span>
              </div>
              <div className="flex items-center">
                <ThumbsUp size={16} className="mr-1" />
                <span>{video.likes}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideosCard;