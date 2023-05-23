//Keypad.js
import React, { useState } from 'react';

const Keypad = ({ combination, component }) => {
  const [enteredCombination, setEnteredCombination] = useState('');
  const [showComponent, setShowComponent] = useState(false);

  const handleNumberClick = (number) => {
    setEnteredCombination((prevCombination) => prevCombination + number);
  };

  const handleResetClick = () => {
    setEnteredCombination('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (enteredCombination === combination) {
      setShowComponent(true);
    } else {
      alert('Incorrect combination entered!');
      setEnteredCombination('');
    }
  };

  return (
    <div>
      {!showComponent ? (
        <div>
          <h2>Enter the 4-digit combination:</h2>
          <div>{enteredCombination}</div>
          <form onSubmit={handleSubmit}>
            <div>
              <button type="button" onClick={() => handleNumberClick(1)}>1</button>
              <button type="button" onClick={() => handleNumberClick(2)}>2</button>
              <button type="button" onClick={() => handleNumberClick(3)}>3</button>
            </div>
            <div>
              <button type="button" onClick={() => handleNumberClick(4)}>4</button>
              <button type="button" onClick={() => handleNumberClick(5)}>5</button>
              <button type="button" onClick={() => handleNumberClick(6)}>6</button>
            </div>
            <div>
              <button type="button" onClick={() => handleNumberClick(7)}>7</button>
              <button type="button" onClick={() => handleNumberClick(8)}>8</button>
              <button type="button" onClick={() => handleNumberClick(9)}>9</button>
            </div>
            <div>
              <button type="button" onClick={() => handleNumberClick(0)}>0</button>
              <button type="button" onClick={handleResetClick}>Reset</button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      ) : (
        component
      )}
    </div>
  );
};

export default Keypad;

//App.js
import React from 'react';
import Keypad from './Keypad';

const App = () => {
  return (
    <div>
      <Keypad />
    </div>
  );
};

export default App;
