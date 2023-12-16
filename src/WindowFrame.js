import React, { useState } from "react";
import Dropdown from "./Dropdown";

const WindowFrame = ({ products }) => {
  const [selectedLens, setSelectedLens] = useState('');

  const handleLensChange = (sku) => {
    setSelectedLens(sku);
  };
  
  return (
    <div className="window mt-5">
      <div className="window__dropdown grid grid-cols-3 h-full">
        <div className="p-10">
          <Dropdown options={products} handleLensChange={handleLensChange} />
        </div>
        <div className="window__scene col-span-2 p-4"></div>
      </div>
    </div>
  );
}

export default WindowFrame;
