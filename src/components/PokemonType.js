function PokemonType({ type }) {
  const pokemonType = type.map((item, index) => <li key={index}>{item}</li>);
  console.log(pokemonType);

  return (
    <div>
      <h2>Tipo</h2>
      <ul>{pokemonType}</ul>
    </div>
  );
}
export default PokemonType;
