//ColorSwitcher.js
import React, { useState } from 'react';

const ColorSwitcher = () => {
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  return (
    <div>
      <h2>Color Switcher</h2>
      <select value={backgroundColor} onChange={handleColorChange}>
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: backgroundColor,
        }}
      ></div>
    </div>
  );
};

export default ColorSwitcher;

//App.js
import React from 'react';
import ColorSwitcher from './ColorSwitcher';

const App = () => {
  return (
    <div>
      <h1>Color Switcher Example</h1>
      <ColorSwitcher />
    </div>
  );
};

export default App;
