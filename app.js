import React, { useState } from 'react';
import './App.css';


const App = () => {
  
  const [counter, setCounter] = useState(0);

  
  const increment = () => {
    setCounter(counter + 1);
  };

 
  const decrement = () => {
    setCounter(counter - 1);
  };

r
  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="app-container">
      <h1>React Counter App</h1>

      <div className="counter-display">
        <p>Current Count: {counter}</p>
      </div>

      <div className="button-group">
        <button className="button" onClick={increment}>Increment</button>
        <button className="button" onClick={decrement}>Decrement</button>
        <button className="button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default App;