import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const Brand = ({ brand }) => {
  const { image, name, season } = brand;
  return (
    <div className='bg-white shadow-1 p-5 rounded-[30px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='rounded-[30px] mb-4' src={image} alt={name} />
      <div className="text-lg font-semibold max-w-[250px] mb-4">{name}</div>
      <div className="mb-4 flex gap-x-2 justify-center text-sm">
        <div className="bg-yellow-500 rounded-full text-white px-3">{season}</div>
        <div className="bg-violet-500 rounded-full text-white px-3 hover:bg-violet-600 transition">VER CATALOGO</div>
      </div>
    </div>
  );
};

export default Brand;
