import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Scene from "./Scene";
import SceneSelector from "./SceneSelector";

const WindowFrame = ({ products, scenes, sceneSelector }) => {
  const [selectedLens, setSelectedLens] = useState('');
  const [selectedScene, setSelectedScene] = useState(0);

  const handleLensChange = (sku) => {
    setSelectedLens(sku);
  };

  const handleSceneChange = (index) => {
    setSelectedScene(index);
  }

  return (
    <div className="window mt-5">
      <div className="window__dropdown grid grid-cols-3 h-full">
        <div className="p-10 h-full">
          <Dropdown options={products} handleLensChange={handleLensChange}
          />
        </div>
        <div className="window__scene col-span-2 h-full relative">
          { scenes.length && <Scene scenes={scenes} selectedLens={selectedLens} selectedScene={selectedScene}/> }
          { selectedLens.length && scenes[selectedScene].sceneImg[selectedLens]  && <SceneSelector sceneSelector={sceneSelector} handleSceneChange={handleSceneChange} /> }
        </div>
      </div>
    </div>
  );
}

export default WindowFrame;
