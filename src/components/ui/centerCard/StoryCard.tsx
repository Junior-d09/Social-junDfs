import React from 'react';

const stories = [
  { id: 1, name: "Votre story", img: "/assets/images/story.jpg" },
  { id: 2, name: "John stone", img: "/assets/images/story.jpg" },
  { id: 3, name: "Melanie Twist", img: "/assets/images/story.jpg" },
  { id: 4, name: "Dossou Sonia", img: "/assets/images/story.jpg" },
  { id: 5, name: "John stone", img: "/assets/images/story.jpg" },
  { id: 6, name: "John week", img: "/assets/images/story.jpg" },
  { id: 7, name: "Fréjust stne", img: "/assets/images/story.jpg" },
  { id: 8, name: "John stown", img: "/assets/images/story.jpg" },
  { id: 9, name: "Adlou stone", img: "/assets/images/story.jpg" },
  { id: 10, name: "John", img: "/assets/images/story.jpg" },
];

const StoryCard = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-black text-lg font-semibold mb-2"></h2>
      <div className="flex space-x-3 p-2 overflow-x-auto pb-4 scrollbar-hide">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center flex-shrink-0">
            <div
              className="w-16 h-16 rounded-full border-2 border-blue-500 bg-cover bg-center"
              style={{ backgroundImage: `url(${story.img})` }}
            />
            <span className="text-black text-xs mt-1 w-16 text-center overflow-hidden text-ellipsis whitespace-nowrap">
              {story.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryCard;