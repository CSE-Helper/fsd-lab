//CharacterCounter.js
import React, { useState } from 'react';

const CharacterCounter = () => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>Character Counter</h2>
      <textarea value={text} onChange={handleTextChange} />
      <p>Character count: {text.length}</p>
    </div>
  );
};

export default CharacterCounter;

//App.js
import React from 'react';
import CharacterCounter from './component/CharacterCounter';

const App = () => {
  return (
    <div>
      <CharacterCounter />
    </div>
  );
};

export default App;
