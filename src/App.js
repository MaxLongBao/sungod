import WindowFrame from './WindowFrame';
import './App.css';

const App = () => {
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
