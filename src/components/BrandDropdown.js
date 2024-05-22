import React, { useState, useEffect, useContext } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { GiBallerinaShoes } from "react-icons/gi";
import { Menu } from "@headlessui/react";

import { BrandContext } from "./BrandContext";

const BrandDropdown = () => {
  const { type, setType, types } = useContext(BrandContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <GiBallerinaShoes className="dropdown-icon-primary text-xl" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{type}</div>
          <div className="text-[13px]">Selecciona la marca</div>
        </div>

        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {types.map((type, index) => {
          return (
            <Menu.Item
              onClick={() => setType(type)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {type}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default BrandDropdown;
