import React from 'react';

function PokemonBasicInfo({ pokemonData }) {
  return (
    <div>
      <h1>
        {pokemonData.name} #{pokemonData.id}
      </h1>
      <img
        src={pokemonData.sprites?.other['official-artwork'].front_default}
        alt="pokemon sprite shiny"
        width="180px"></img>
      <h2>Peso: {pokemonData.weight / 10}kg</h2>
      <h2>Altura: {pokemonData.height / 10}m</h2>
    </div>
  );
}

export default PokemonBasicInfo;
