//App.js
import React from 'react';
import EmojiSearch from './EmojiSearch';

function App() {
  return (
    <div className="App">
      <EmojiSearch />
    </div>
  );
}

export default App;

//EmojiSearch.js
import React, { useState } from 'react';

const emojis = [
  { name: 'Grinning Face', emoji: '😀' },
  { name: 'Smiling Face with Smiling Eyes', emoji: '😊' },
  { name: 'Face with Tears of Joy', emoji: '😂' },
  { name: 'Rolling on the Floor Laughing', emoji: '🤣' },
  // Add more emojis to the list
];

const EmojiSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  const filteredEmojis = emojis.filter((emoji) =>
    emoji.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search emojis..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredEmojis.map((emoji, index) => (
          <li key={index}>{emoji.emoji} - {emoji.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmojiSearch;
