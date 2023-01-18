import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

/**
 * useState(), increase/decrease count variable, change the state
 */

function App() {
  return (
    <div className="App">
      <Count />
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default App;
