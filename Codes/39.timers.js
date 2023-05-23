//Timers.js
import React, { useState } from 'react';

const Timer = ({ seconds, onTimerComplete }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  // Function to start the countdown
  const startCountdown = () => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          clearInterval(timer);
          onTimerComplete();
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  // Start the countdown when the Timer component is rendered
  startCountdown();

  return <div>{timeLeft}</div>;
};

const Timers = () => {
  const [timers, setTimers] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTimer = () => {
    const seconds = parseInt(inputValue);
    if (!isNaN(seconds) && seconds > 0) {
      setTimers((prevTimers) => [...prevTimers, seconds]);
      setInputValue('');
    }
  };

  const handleTimerComplete = (index) => {
    setTimers((prevTimers) => {
      const updatedTimers = [...prevTimers];
      updatedTimers.splice(index, 1);
      return updatedTimers;
    });
  };

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <input
          type="number"
          min="1"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter seconds"
        />
        <button onClick={handleAddTimer}>Add Timer</button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {timers.map((seconds, index) => (
          <div key={index} style={{ margin: '10px', padding: '10px', border: '1px solid black' }}>
            <Timer seconds={seconds} onTimerComplete={() => handleTimerComplete(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timers;


//App.js
import React from 'react';
import Timers from './Timers';

const App = () => {
  return (
    <div>
      <Timers />
    </div>
  );
};

export default App;
