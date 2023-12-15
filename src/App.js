import React, { useState, useEffect } from 'react';
import WindowFrame from './WindowFrame';
import './App.css';

const App = () => {
   const [products, setProducts] = useState(null);
   const [scenes, setScenes] = useState(null);

   useEffect(() => {
     fetch('https://www.sungod.co/products/9150/renegades?pdp=1')
       .then(response => response.json())
       .then(data => {
        if (data?.renegades?.parts[1].options) {
          const selectedElements = data.renegades.parts[1].options.map(({ id, name, sku }) => ({ id, name, sku }));
          setProducts(selectedElements);
        } else {
          // to do: handle error
          console.error('Invalid data structure');
        }
      });
  }, []);
   
    useEffect(() => {
      fetch('https://gist.githubusercontent.com/robwatkiss/09f2461e02d372747dad5fe56ff2251f/raw/b942d9ba21e10889a6cfce639c1a12f6bb2bfa0e/Senior%2520Frontend%2520Developer%2520Task%2520-%2520Sample%2520Lens%2520Guide%2520Data.json')
        .then(response => response.json())
        .then(data => {
          if (data) {
            const selectedElements = data.map(item => ({
              nameEyeImg: item.nakedEyeImage.responsiveImage.src,
              sceneImg: item.sceneImages
            }));
            setScenes(selectedElements);
          } else {
            // to do: handle error
            console.error('Invalid data structure');
          }
        });
    }, []);

  return (
    <div className="app p-5 h-screen">
      <div className="app__close__button flex justify-end">
        <p className="underline cursor-pointer">Close</p>
      </div>
      <WindowFrame />
    </div>
  );
}

export default App;
