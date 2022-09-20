import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import Greeting from './components/Greeting';
import GreetingClass from './components/GreetingClass';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Greeting name="Batman">
        <h1>Greeting to <em>Bruce</em></h1>
      </Greeting>
      <GreetingClass name="Superman">
        <h1>Greeting to <em>Clark</em></h1>
      </GreetingClass>
    </div>
  );
}

export default App;