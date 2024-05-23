import React, { useContext } from "react";
import { BrandContext } from "./BrandContext";
import Brand from "./Brand";

const BrandList = () => {
  const { brands, loading } = useContext(BrandContext);

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {brands.map((brand, index) => (
            <a href={brand.url} target="_blank" rel="noopener noreferrer" key={index}>
              <Brand brand={brand} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandList;
