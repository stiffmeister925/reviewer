// LONG HAND NG MAP
// return (
//   <div>
//     {pokemons.map(pokemon => {
//       return <Pokemon name={pokemon.name} image={pokemon.image} type={pokemon.type}/>
//       }}
//     </div>
//   );
// }

export default function Pokemon({ name, image, type, id, weakness}) {
  return (
    <tr>
            <td>
        <p>{id}</p>
      </td>
      <td>
        <p>{name}</p>
      </td>
      <td>
        <img src={image}/>
      </td>
      <td>
        <p>{type}</p>
      </td>
      <td>
        <p>{weakness}</p>
      </td>
    </tr>
  );
}
