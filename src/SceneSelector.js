import React, { useState } from "react";

const SceneSelector = ({ sceneSelector, handleSceneChange }) => {

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className='selector absolute bottom-5 left-1/3 bg-white p-1 rounded-lg'>
      <div className='selector__images flex gap-1'>
        { sceneSelector && sceneSelector.map((scene, index) => (
          <img
            key={index}
            src={scene}
            alt="scene icon"
            className={`w-7 h-7 object-cover cursor-pointer ${selectedImageIndex === index ? 'border-green-500 border-2' : ''}`}
            onClick={() => {
              handleSceneChange(index);
              setSelectedImageIndex(index);
            }}
          />
        ))}
        <p className="w-7 h-7 text-black text-center cursor-pointer">x</p>
      </div>
    </div>
  );
};

export default SceneSelector;
