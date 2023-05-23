//TextInputField.js

import React, { useState } from "react";

function TextInputField() {
  const [inputValue, setInputValue] = useState("");
  const [strings, setStrings] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedString, setSelectedString] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setStrings([...strings, inputValue]);
      setInputValue("");
    }
  };

  const openModal = (string) => {
    setSelectedString(string);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Text Input</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {strings.map((string, index) => (
          <li key={index} onClick={() => openModal(string)}>
            {string.length <= 5 ? string : `${string.slice(0, 5)}...`}
          </li>
        ))}
      </ul>
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <p>{selectedString}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TextInputField;


//App.js
import React from 'react';
import TextInputField from './TextInputField';

const App = () => {
  return (
    <div>
      <h1>TextInputField Example</h1>
      <TextInputField />
    </div>
  );
};

export default App;
