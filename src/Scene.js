import React, { useState, useRef } from 'react';

const Scene = ({ scenes, selectedLens, selectedScene }) => {
  const [imagePortion, setImagePortion] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [initialMouseX, setInitialMouseX] = useState(0);

  const sceneContainerRef = useRef(null);

  const imageStyle = {
    clipPath: `polygon(${imagePortion}% 0%, 100% 0%, 100% 100%, ${imagePortion}% 100%)`,
  };

  const handleResizeStart = (e) => {
    e.preventDefault();
    setDragging(true);
    setInitialMouseX(e.clientX);
  };

  const handleResize = (e) => {
    if (dragging) {
      const sceneRect = sceneContainerRef.current.getBoundingClientRect();
      const offsetX = e.clientX - initialMouseX;
      const offsetXRelative = (offsetX / sceneRect.width) * 100;
      const newImagePortion = Math.min(100, Math.max(0, imagePortion + offsetXRelative));
      setImagePortion(newImagePortion);
      setInitialMouseX(e.clientX);
    }
  };

  const handleResizeEnd = () => {
    setDragging(false);
  };

  return (
    <div
      ref={sceneContainerRef}
      className='scene relative h-full'
      style={{ cursor: dragging ? 'grabbing' : 'grab' }}
      onMouseDown={(e) => handleResizeStart(e)}
      onMouseMove={(e) => handleResize(e)}
      onMouseUp={handleResizeEnd}
      onMouseLeave={handleResizeEnd}
    >
      {selectedLens && scenes[selectedScene].sceneImg[selectedLens] ? (
        <>
          <img
            src={scenes[selectedScene].nakedEyeImage}
            alt="scene"
            className="absolute top-0 right-0 w-full h-full object-cover"
          />
          <img
            src={scenes[selectedScene].sceneImg[selectedLens].image.responsiveImage.src}
            alt="scene"
            className="absolute right-0 top-0 w-full h-full object-cover"
            style={imageStyle}
          />
        </>
      ) : (
        <p className="text-black">
          {selectedLens ? 'Preview not available - please select another lens' : ''}
        </p>
      )}
    </div>
  );
};

export default Scene;
