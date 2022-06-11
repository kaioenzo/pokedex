import './App.css';
import api from './services/api';
import { useState, useEffect } from 'react';

function App() {
  const [pokemon, setPokemon] = useState(undefined)
  const [pokemonWeakness, setPokemonWeakness] = useState(undefined)
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonSearch,setPokemonSearch] = useState(undefined)
  useEffect(() => {
    if(pokemonSearch!==undefined){
      api
      .get(`pokemon/${pokemonSearch}`)
      .then((response) => setPokemon(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      })
    }
  }, [pokemonSearch])

  useEffect(() => {
    if (pokemon!==undefined) {
      api
      .get(`type/${pokemon.types[0].type.name}`)
      .then((response) => setPokemonWeakness(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      })
    }
  }, [pokemon])
  const handleSubmit = () => setPokemonSearch(pokemonName)
  // console.log(pokemonWeakness?.damage_relations.double_damage_from[0].name)

  console.log(pokemonSearch)
  return (
    <div className="App">
      <input
      type="text"
      name='search'
      id='search'
      onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={handleSubmit}>Buscar</button>





    <h1>{pokemon?.name} #{pokemon?.id}</h1>
    <img src={pokemon?.sprites.front_default}></img>
    <h2>Tipos</h2>
    <ul>
      <li>{pokemon?.types[0].type.name}</li>
      <li>{pokemon?.types[1]?.type.name}</li>
    </ul>
    <h2>Peso: {pokemon?.weight/10}kg</h2>
    <h2>Altura: {pokemon?.height/10}m</h2>
    <h3>Fraquezas</h3>
    <ul>
    <li>{pokemonWeakness?.damage_relations.double_damage_from[0].name}</li>
    <li>{pokemonWeakness?.damage_relations.double_damage_from[1].name}</li>
    </ul>
    <h3>Forte contra:</h3>
    <ul>
      <li>{pokemonWeakness?.damage_relations.double_damage_to[0].name}</li>
      <li>{pokemonWeakness?.damage_relations.double_damage_to[1].name}</li>
      <li>{pokemonWeakness?.damage_relations.double_damage_to[2].name}</li>

    </ul>


    </div>
  );
}

export default App;
