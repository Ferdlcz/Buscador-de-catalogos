import React, { createContext, useEffect, useState } from "react";

import { brandData } from "../data";

export const BrandContext = createContext();

const BrandContextProvider = ({ children }) => {
  const [brands, setBrands] = useState(brandData);
  const [type, setType] = useState("Marca (Todos)");
  const [types, setTypes] = useState([]);
  const [name, setName] = useState("name (any)");
  const [image, setImage] = useState([]);
  const [url, setUrl] = useState("url (any)");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const allTypes = brands.map((brand) => {
      return brand.type;
    });

    const uniqueTypes = ["Marca", ...new Set(allTypes)];

    setTypes(uniqueTypes);
  }, []);

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
      }}
    >
      {children}
    </BrandContext.Provider>
  );
};

export default BrandContextProvider;
