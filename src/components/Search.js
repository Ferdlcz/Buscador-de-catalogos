import React, { useContext } from "react";
import BrandDropdown from "./BrandDropdown";
import { RiSearch2Line } from "react-icons/ri";
import { BrandContext } from "./BrandContext";

const Search = () => {
  const { handleClick, searchTerm, setSearchTerm } = useContext(BrandContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-x-3 relative lg:top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
        <BrandDropdown />
        <button
          onClick={handleClick}
          className="bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-10 rounded-lg flex justify-center items-center text-white text-lg"
        >
          <p className="mr-2">Buscar</p> <RiSearch2Line />
        </button>

        <input
          type="text"
          placeholder="Buscar catalogo..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full lg:max-w-[200px] h-10 px-4 border rounded-lg"
        />
      </div>
    </div>
  );
};

export default Search;
