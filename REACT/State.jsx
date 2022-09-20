import './App.css';
import Greeting from './Greeting';
import { useState } from 'react';

function App() {
  const [word, setWord] = useState(); //ung second at ung function para baguhin ung index0 or yung word
// NOTE DESTRUCTURE LGE
  // let word = 'Bruce Almighty'; // kesa mag gnto nag useState() na lng
// note kelangan gumamit ng hooks pra ma recognize ung change ng real dom sa react


// yung 0 index ay variable
// yung index 1 ay the changer or new value
// return ng useState() ay array
  const inputHandler = (event) => {
    // console.log('Hey', event.target.value);
    // word = event.target.value; kesa ganto mag setWord na lng
    if(event.key === "Enter") {
      setWord(event.target.value);
      console.log('New Word:', word);
    }
  };

  return (
    <div className="App">
      <Greeting name={word} />
      <input id="input" type="text" onKeyPress={inputHandler} />
    </div>
  );
}

export default App;