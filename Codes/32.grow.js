//Grow.js
import React, { useState, useEffect } from 'react';

const Grow = () => {
  const [isGrowing, setIsGrowing] = useState(true);
  const [size, setSize] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isGrowing) {
        setSize(prevSize => (prevSize < 200 ? prevSize + 10 : prevSize));
      } else {
        setSize(prevSize => (prevSize > 100 ? prevSize - 10 : prevSize));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isGrowing]);

  const handleButtonClick = () => {
    setIsGrowing(prevIsGrowing => !prevIsGrowing);
  };

  return (
    <button
      style={{ width: size, height: size }}
      onClick={handleButtonClick}
    >
      {isGrowing ? 'Shrink' : 'Grow'}
    </button>
  );
};

export default Grow;

//App.js
import React from 'react';
import Grow from './Grow';

const App = () => {
  return (
    <div>
      <h1>Grow Example</h1>
      <Grow />
    </div>
  );
};

export default App;
