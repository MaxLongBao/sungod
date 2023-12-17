const Scene = ({ scenes, selectedLens }) => {
console.log(selectedLens)
console.log(scenes)

const imageStyle = {
  clipPath: 'polygon(75% 0%, 100% 0%, 100% 100%, 75% 100%)',
};

  return (
    <div className='scene relative h-full'>
      <img
        src={scenes[0].nakedEyeImage}
        alt="scene"
        className="absolute top-0 right-0 w-full h-full object-cover"
      />
        <img
          src={scenes[0].nakedEyeImage}
          alt="scene"
          className="absolute right-0 top-0 w-full h-full object-cover"
          style={imageStyle}
        />
    </div>
  );
};

export default Scene;
