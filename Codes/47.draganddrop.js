//DragAndDrop.js
import React, { useState } from 'react';

const DragAndDropList = () => {
  const [list, setList] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ]);

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, targetIndex) => {
    const sourceIndex = event.dataTransfer.getData('text/plain');
    const newList = [...list];
    const [removed] = newList.splice(sourceIndex, 1);
    newList.splice(targetIndex, 0, removed);
    setList(newList);
  };

  return (
    <div>
      <h2>Drag and Drop List</h2>
      <ul>
        {list.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={(event) => handleDragStart(event, index)}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragAndDropList;

//App.js
import React from 'react';
import DragAndDropList from './DragAndDropList';

const App = () => {
  return (
    <div>
      <h1>Drag and Drop List Example</h1>
      <DragAndDropList />
    </div>
  );
};

export default App;
