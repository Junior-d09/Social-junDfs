import React from "react";
import { Search } from "lucide-react";

const UISearch = () => {
  return (
    <div className="flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 h-[40px] text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out    ">
      <input
        type="text"
        name="search"
        id="search"
        className="bg-transparent focus:outline-none w-[400px] pl-3"
        placeholder="Rechercher"
      />
      <div className="flex items-center justify-center bg-[#F8F8F8] dark:bg-[#222222] w-[70px] h-full rounded-e-full cursor-pointer">
        <Search size={20} />
      </div>
    </div>
  );
};

export default UISearch;
