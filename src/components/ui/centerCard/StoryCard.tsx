import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Plus, Upload } from "lucide-react";
import Image from "next/image";

const StoryCard = () => {
  const scrollRef = useRef(null);
  const fileInputRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [stories, setStories] = useState([
    {
      id: 1,
      name: "Votre story",
      img: "/assets/images/story.jpg",
      isProfile: true,
    },
    {
      id: 2,
      name: "Ben Ephraïm",
      img: "/assets/images/story.jpg",
      isProfile: false,
    },
    {
      id: 3,
      name: "François Houssou",
      img: "/assets/images/story.jpg",
      isProfile: false,
    },
    {
      id: 4,
      name: "Dossou Sonia",
      img: "/assets/images/story.jpg",
      isProfile: false,
    },
    {
      id: 5,
      name: "John Stone",
      img: "/assets/images/story.jpg",
      isProfile: false,
    },
    {
      id: 6,
      name: "John Week",
      img: "/assets/images/story.jpg",
      isProfile: false,
    },
    {
      id: 7,
      name: "Fréjust Stone",
      img: "/assets/images/story.jpg",
      isProfile: false,
    },
    {
      id: 8,
      name: "John Stown",
      img: "/assets/images/story.jpg",
      isProfile: false,
    },
    {
      id: 9,
      name: "Adlou Stone",
      img: "/assets/images/story.jpg",
      isProfile: false,
    },
    { id: 10, name: "John", img: "/assets/images/story.jpg", isProfile: false },
  ]);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
      checkScrollButtons();
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
      checkScrollButtons();
    }
  };

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const handleScroll = () => {
    checkScrollButtons();
  };

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);

      // Add the new story to the beginning of the array (after the create story option)
      const newStories = [...stories];
      newStories.unshift({
        id: Date.now(), // Use timestamp as unique ID
        name: "Votre story",
        img: imageUrl,
        isProfile: false,
        isNew: true,
      });

      setStories(newStories);

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle story click
  const handleStoryClick = (story) => {
    // In a real app, you would open the story viewer or navigate to the story page
    console.log("Story clicked:", story);
  };

  return (
    <div className="bg-white p-4 rounded-2xl relative">
      <div className="relative">
        {/* Left scroll button */}
        {showLeftButton && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-1 hover:bg-gray-100"
            aria-label="Défiler vers la gauche"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Stories container */}
        <div
          ref={scrollRef}
          className="flex space-x-4 p-2 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={handleScroll}
        >
          {/* Create Story option */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div
              className="relative w-20 h-28 rounded-lg overflow-hidden bg-gray-100 cursor-pointer"
              onClick={triggerFileInput}
            >
              <div className="absolute inset-0 flex flex-col items-center">
                <div className="h-3/4 w-full bg-gray-200 flex items-end justify-center">
                  <Image
                    src="/assets/images/story.jpg"
                    alt="User"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mb-2"
                  />
                </div>
                <div className="h-1/4 w-full bg-white flex items-center justify-center">
                  <div className="absolute bottom-8 bg-blue-600 rounded-full p-1">
                    <Plus size={16} color="white" />
                  </div>
                  <span className="text-xs font-medium text-center">
                    Créer une story
                  </span>
                </div>
              </div>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              className="hidden"
            />
          </div>

          {/* Story items */}
          {stories.map((story) => (
            <div
              key={story.id}
              className="flex flex-col items-center flex-shrink-0"
              onClick={() => handleStoryClick(story)}
            >
              <div className="relative w-20 h-28 rounded-lg overflow-hidden cursor-pointer">
                <Image
                  src={story.img}
                  alt={story.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                  <span className="text-white text-xs font-medium">
                    {story.name}
                  </span>
                </div>
                {story.isProfile && (
                  <div className="absolute top-2 left-2 w-8 h-8 rounded-full border-4 border-blue-500 overflow-hidden">
                    <Image
                      src={story.img}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right scroll button */}
        {showRightButton && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-1 hover:bg-gray-100"
            aria-label="Défiler vers la droite"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default StoryCard;
