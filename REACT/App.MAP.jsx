import Pokemon from './Pokemon';
import './App.css';

function App() {
  const pokemons = [
    {
      id: '#001',
      name: 'Bulbasaur',
      type: 'Grass',
      weakness: 'Fire',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    },
    {
      id: '#002',
      name: 'IvySaur',
      type: 'Grass',
      weakness: 'Fire',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
    },
    {
      id: '#003',
      name: 'Venusaur',
      type: 'Grass',
      weakness: 'Fire',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
    },
    {
      id: '#004',
      name: 'Charmander',
      type: 'Fire',
      weakness: 'Water',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
    },
    {
      id: '#005',
      name: 'Charmeleon',
      type: 'Fire',
      weakness: 'Water',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
    },
    {
      id: '#006',
      name: 'Charizard',
      type: 'Fire',
      weakness: 'Water',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
    },
    {
      id: '#007',
      name: 'Squirtle',
      type: 'Water',
      weakness: 'Grass',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
    },
    {
      id: '#008',
      name: 'Wartortle',
      type: 'Water',
      weakness: 'Grass',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png',
    },
    {
      id: '#009',
      name: 'Blastoise',
      type: 'Water',
      weakness: 'Grass',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png',
    },
  ];

  return (
    <div>
      <tr className='table-header'>
        <td><h2>Pokedex</h2></td>
        <td><h2>Name</h2></td>
        <td><h2>Image</h2></td>
        <td><h2>Type</h2></td>
        <td><h2>Weakness</h2></td>
      </tr>
      {pokemons.map(pokemon => (
        <Pokemon id={pokemon.id} name={pokemon.name} image={pokemon.image} type={pokemon.type} weakness={pokemon.weakness}/>
      ))}
    </div>
  );
}

export default App;
