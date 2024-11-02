import Image from "next/image";
import React, { useState } from "react";

function DesignType({ selectedDesignType }) {
  const Designs = [
    {
      name: "Modern",
      image: "/modern.webp",
    },
    {
      name: "Traditional",
      image: "/traditional.webp",
    },
    {
      name: "Bohemian",
      image: "/bohemian.webp",
    },
    {
      name: "Minimalist",
      image: "/minimalist.webp",
    },
    {
      name: "Industrial",
      image: "/industrial.webp",
    },
    {
      name: "Rustic",
      image: "/rustic.webp",
    },
  ];

  const [selectedOption, setSelectedOption] = useState();

  return (
    <div className="mt-5">
      <label>Select Interior Room Type</label>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {Designs.map((design, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedOption(design.name);
              selectedDesignType(design.name);
            }}
          >
            <Image
              src={design.image}
              height={100}
              width={100}
              alt=""
              className={`h-[70px] rounded-md hover:scale-105 transition-all cursor-pointer ${
                design.name == selectedOption &&
                "border-2 border-black rounded-md p-1"
              }`}
            />
            {design.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignType;
