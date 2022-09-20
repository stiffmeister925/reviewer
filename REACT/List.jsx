// {products.map((item) => (
//   <li>{products.name} cost {products.price}</li>
// ))}

import './App.css';

function App() {
  const products = [
    {
      name: 'iPhone 14 Pro',
      price: 31000,
    },
    {
      name: 'Xiaomi',
      price: 30000,
    },
    {
      name: 'Samsung',
      price: 34500,
    },
  ];

  const mapEachProduct = ({ name, price }) => {
    return (
      <li>
        {name} PHP {price}
      </li>
    );
  };

  return (
    <div className="App">
      <ol>{products.map(mapEachProduct)}</ol>
    </div>
  );
}

export default App;


