//Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;

//App.js
import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <h1>Simple Counter</h1>
      <Counter />
    </div>
  );
};

export default App;
