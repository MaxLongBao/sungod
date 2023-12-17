const Scene = ({ scenes, selectedLens, selectedScene }) => {

const imageStyle = {
  clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)',
};

return (
    <div className='scene relative h-full'>
      {
        selectedLens && scenes[selectedScene].sceneImg[selectedLens] ? (
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
        )
        : <p className="text-black">{selectedLens ? 'Preview not available - please select another lens' : ''}</p>
        }
          </div>
  );
};

export default Scene;
