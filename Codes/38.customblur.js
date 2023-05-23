//CustomBlur.js

import React, { useState } from 'react';

const CustomBlur = () => {
  const [blurValue, setBlurValue] = useState(0);

  const handleBlurChange = (event) => {
    setBlurValue(event.target.value);
  };

  return (
    <div>
      <img
        src={`https://picsum.photos/400/300?blur=${blurValue}&random=${Math.random()}`}
        alt="Lorem Picsum"
        style={{ filter: `blur(${blurValue}px)` }}
      />
      <div>
        <label htmlFor="blurRange">Blur:</label>
        <input
          type="range"
          id="blurRange"
          min="0"
          max="10"
          value={blurValue}
          onChange={handleBlurChange}
        />
      </div>
    </div>
  );
};

export default CustomBlur;

//App.js
import React from 'react';
import CustomBlur from './CustomBlur';

const App = () => {
  return (
    <div>
      <CustomBlur />
    </div>
  );
};

export default App;
