import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Aj from './AJ';
import './App.css';
import Button from './Button';
import React from "react";

import Greeting from './Greetings';

// const menu = [
//   {
//     emoji: 'ball', cost: 19,
//   },
//   {
//     emoji: 'bigBall', cost: 21,
//   },
//   {
//     emoji: 'smallBall', cost: 22,
//   },
// ]

function App() {
  const [count, setCount] = useState(0)
  let word;

  const inputHandler = (event) => {
    // console.log('Hey', event.target.value);
    const [state, setState] = React.useState({
      firstName: ""
    })
    word = event.target.value;
    console.log('New Word:', word);
  };

  return (
    <div className="App">
      {/* <ol>
        {menu.map((item) => (
          <li>{products.emoji} cost PHP {products.cost}</li>
        ))}
      </ol> */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Aj />
      <Button />

      <div className="App">
      <Greeting name={inputHandler} />
      <input id="input" type="text" onChange={inputHandler} />
    </div>

    </div>
  )
}

export default App
