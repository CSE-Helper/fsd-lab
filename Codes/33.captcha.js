//CaptchaTest.js
import React, { useState } from 'react';

const CaptchaTest = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    setRandomNumber(randomNum);
  };

  const handleImageClick = (selectedNumber) => {
    if (selectedNumber === randomNumber) {
      alert('You passed the CAPTCHA test!');
      setRandomNumber(null);
    } else {
      alert('Incorrect selection. Please try again.');
    }
  };

  return (
    <div>
      <button onClick={generateRandomNumber}>Start CAPTCHA Test</button>
      {randomNumber && (
        <div>
          <p>Please select the image with the number {randomNumber}:</p>
          <div>
            <img src="image1.jpg" alt="Number 1" onClick={() => handleImageClick(1)} />
            <img src="image2.jpg" alt="Number 2" onClick={() => handleImageClick(2)} />
            <img src="image3.jpg" alt="Number 3" onClick={() => handleImageClick(3)} />
            <img src="image4.jpg" alt="Number 4" onClick={() => handleImageClick(4)} />
            <img src="image5.jpg" alt="Number 5" onClick={() => handleImageClick(5)} />
            <img src="image6.jpg" alt="Number 6" onClick={() => handleImageClick(6)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CaptchaTest;

//App.js
import React from 'react';
import CaptchaTest from './component/CaptchaTest';

const App = () => {
  return (
    <div>
      <h1>CaptchaTest Example</h1>
      <CaptchaTest />
    </div>
  );
};

export default App;
