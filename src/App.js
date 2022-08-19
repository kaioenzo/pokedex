import './App.css';
import api from './services/api';
import { useState, useEffect } from 'react';
import PokemonType from './components/PokemonType';
import PokemonBasicInfo from './components/PokemonBasicInfo'
import PokemonWeaknessStrength from './components/PokemonWeakness';
import AllPokemon from './components/AllPokemon';

function App() {
  const [pokemon, setPokemon] = useState(undefined)
  const [pokemonName, setPokemonName] = useState(undefined)
  const pokemonTypes = []

  useEffect(() => {
    if(pokemonName!==undefined){
      api
      .get(`pokemon/${pokemonName}`)
      .then((response) => setPokemon(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
      })
    }
  }, [pokemonName])


  const handleChangeInput = (e) => {
    const pokemonInput = e.target.value
    const pokemonStringLowerCase = pokemonInput.toLowerCase()

    if(pokemonStringLowerCase.trim().length > 3){
      setPokemonName(pokemonStringLowerCase);
    }
    else{
      setPokemonName(undefined)
      setPokemon(undefined)
    }
  }

  if (pokemon!==undefined) {
      for (let i = 0; i < pokemon.types.length; i++) {
       pokemonTypes.push(pokemon.types[i].type.name)

      }
}

if (pokemon===undefined) {
  return(
        <div className='App'>
        <input
        type="text"
        name='search'
        id='search'
        onChange={handleChangeInput}
        placeholder='Blastoise'
        required
        />
      <AllPokemon/>
        </div>
  )
}
  return (
    <div className="App">
    <input
    type="text"
    name='search'
    id='search'
    onChange={handleChangeInput}
    placeholder='Blastoise'
    required
/>

    <PokemonBasicInfo pokemonData={pokemon}/>
    <PokemonType type={pokemonTypes}/>
    <PokemonWeaknessStrength pokemonData={pokemon}/>

    </div>
  );
}

export default App;
