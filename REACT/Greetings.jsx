
// APP.jsx to
// import './App.css';
// import Greeting from './Greeting';

// function App() {
//   return (
//     <div className="App" id="app-id">
//       <Greeting name="Jag" prefix="hey" id="app-id" /> eto ung sa props
//     </div>
//   );
// }

// export default App;

// yung props ay object as an attribute
// mas advisable use ung destructuring 

// function Greeting(props) {
//   console.log(props);
//   const name = 'Jag';

//   return (
//     <div>
//       Hello <span>{name}</span>
//     </div>
//   );
// }

// export default Greeting;

//mas advisable destructuring kesa sa props
// Props is an object
// { name: 'Jag' }
function Greeting({ name }) { // pde din name = 'DefaultName'
  return (
    <div>
      Hello <span>{name || 'Anonymous'}</span> // default value gagamit ng ||
    </div>
  );
}

// pero pinaka advisable ang defaultProps
Greeting.defaultProps = {
  name: 'Default Name',
}

export default Greeting;

// pde dn gumamit ng 