import React, { createContext, useEffect, useState } from "react";

import { brandData } from "../data";

export const BrandContext = createContext();

const BrandContextProvider = ({ children }) => {
  const [brands, setBrands] = useState(brandData);
  const [type, setType] = useState("Catalogos (Todos)");
  const [types, setTypes] = useState([]);
  const [name, setName] = useState("name (any)");
  const [image, setImage] = useState([]);
  const [url, setUrl] = useState("url (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allTypes = brands.map((brand) => {
      return brand.type;
    });

    const uniqueTypes = ["Catalogos (Todos)", ...new Set(allTypes)];

    setTypes(uniqueTypes);
  }, []);

  const handleClick = () =>{

    const isDefault = (str) =>{
      return str.split(' ').includes('(Todos)')
    };

    const newBrands = brandData.filter((brand) =>{
      const brandType = brand.type

      if (isDefault(type)){
        return brand
      }

      if(!isDefault(type)){
        return brandType === type;
      }
    });

    setTimeout(() =>{
      return newBrands.length < 1 ? setBrands([]) : 
      setBrands(newBrands);
      setLoading(false); 
    })

  }

  return (
    <BrandContext.Provider
      value={{
        brands,
        type,
        setType,
        name,
        setName,
        image,
        setImage,
        url,
        setUrl,
        loading,
        types,
        handleClick
      }}
    >
      {children}
    </BrandContext.Provider>
  );
};

export default BrandContextProvider;
