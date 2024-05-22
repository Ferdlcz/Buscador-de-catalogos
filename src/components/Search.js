import React, { useContext } from "react";

import BrandDropdown from "./BrandDropdown";
import { RiSearch2Line } from "react-icons/ri";
import { BrandContext } from "./BrandContext";

const Search = () => {
  const { brands } = useContext(BrandContext);

  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-center gap-4 lg:gap-x-3 relative lg:top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <BrandDropdown />
      <button className="bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-10 rounded-lg flex justify-center items-center text-white text-lg">
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;