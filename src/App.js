import React, { useState, useEffect } from 'react';
import useFetch from './UseFetch';
import WindowFrame from './WindowFrame';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [scenes, setScenes] = useState([]);
  const [sceneSelector, setSceneSelector] = useState([]);

  const { data: productData, loading: productLoading, error: productError } = useFetch('https://www.sungod.co/products/9150/renegades?pdp=1');
  const { data: sceneData, loading: sceneLoading, error: sceneError } = useFetch('https://gist.githubusercontent.com/robwatkiss/09f2461e02d372747dad5fe56ff2251f/raw/b942d9ba21e10889a6cfce639c1a12f6bb2bfa0e/Senior%2520Frontend%2520Developer%2520Task%2520-%2520Sample%2520Lens%2520Guide%2520Data.json');

  const loading = productLoading || sceneLoading;
  const error = productError || sceneError;

  useEffect(() => {
    if (productData && sceneData) {
        if (productData?.renegades?.parts[1].options) {
          const selectedProducts = productData.renegades.parts[1].options.map(({ id, name, sku }) => ({ id, name, sku }));
          setProducts(selectedProducts);
        } else {
          // to do: handle error
          console.error('Invalid data structure');
        }

      const selectedLensScenes = sceneData.map(item => ({
        nakedEyeImage: item.nakedEyeImage.responsiveImage.src,
        sceneImg: item.sceneImages
      }));
      setScenes(selectedLensScenes);

      const selectedScenes = sceneData.map(item => item.nakedEyeImage.responsiveImage.src);
      setSceneSelector(selectedScenes);
    };
  }, [productData, sceneData]);

  if (loading) return 'Loading...';
  if (error) return 'Error!';

  return (
    <div className="app p-5 h-screen">
      <div className="app__close__button flex justify-end">
        <p className="underline cursor-pointer">Close</p>
      </div>
      <WindowFrame products={products} scenes={scenes} sceneSelector={sceneSelector} />
    </div>
  );
}

export default App;
