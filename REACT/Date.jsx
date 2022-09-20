// import './App.css';

// function App() {
//   const date = new Date();
//   const seconds = date.getSeconds();

//   // IF seconds IS MORE THAN 30
//   //    RETURN WOW
//   // ELSE
//   //    RETURN current seconds
//   // (condition) ? 'Wow' : seconds

//   return (
//     <div className="App">
//       <h1>Date: {seconds > 30 ? 'WOW' : seconds}</h1>
//     </div>
//   );
// }

// export default App;

import './App.css';

function App() {
  const date = new Date();
  const seconds = date.getSeconds();

  // IF seconds IS MORE THAN 30
  //    RETURN WOW
  // ELSE
  //    RETURN current seconds
  // (condition) ? 'Wow' : seconds

  // pde dn to
  // if (seconds > 30) {
  //   return <div className="App">Wow</div>;
  // }

  // or eto
//   return (
//     <div className="App">{seconds > 30 ? 'WOW' : <h1>Date: {seconds}</h1>}</div>
//   );
// }

  return (
    <div className="App">
      {
      seconds > 30 
      ? <span>WoW</span> 
      : <h1>Date: {seconds}</h1>
      }
    </div>
  );
}



export default App;

