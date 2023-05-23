//InputField.js
import React, { useState } from 'react';

const InputField = () => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>Controlled Input Field</h2>
      <input type="text" value={text} onChange={handleTextChange} />
      <p>Text: {text}</p>
    </div>
  );
};

export default InputField;

//App.js
import React from 'react';
import InputField from './component/InputField';

const App = () => {
  return (
    <div>
      <InputField />
    </div>
  );
};

export default App;
