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
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const allTypes = brands.map((brand) => brand.type);
    const uniqueTypes = ["Catalogos (Todos)", ...new Set(allTypes)];
    setTypes(uniqueTypes);
  }, [brands]);

  const handleClick = () => {
    setLoading(true); // Iniciar el loading

    const isDefault = (str) => {
      return str.split(' ').includes('(Todos)');
    };

    const newBrands = brandData.filter((brand) => {
      const brandType = brand.type;
      if (isDefault(type)) {
        return brand;
      }
      if (!isDefault(type)) {
        return brandType === type;
      }
      return false;
    });

    setTimeout(() => {
      setBrands(newBrands.length < 1 ? [] : newBrands);
      setLoading(false); // Detener el loading
    }, 500); // Define un tiempo para el setTimeout (500ms en este caso)
  };

  useEffect(() => {
    const filteredBrands = brandData.filter((brand) =>
      brand.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBrands(filteredBrands);
  }, [searchTerm]);

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
        handleClick,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </BrandContext.Provider>
  );
};

export default BrandContextProvider;
