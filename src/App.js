import './App.css';
import api from './services/api';
import { useState, useEffect } from 'react';
import PokemonType from './components/PokemonType';
import PokemonBasicInfo from './components/PokemonBasicInfo'
import PokemonWeaknessStrength from './components/PokemonWeakness';

function App() {
  const [pokemon, setPokemon] = useState(undefined)
  const [pokemonWeakness, setPokemonWeakness] = useState(undefined)
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonSearch,setPokemonSearch] = useState(undefined)
  const pokemonTypes = []


  useEffect(() => {
    if(pokemonSearch!==undefined){
      api
      .get(`pokemon/${pokemonSearch}`)
      .then((response) => setPokemon(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
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



  const handleChangeInput = (e) => {
    const pokemonInput = e.target.value
    const pokemonStringLowerCase = pokemonInput.toLowerCase()
    setPokemonName(pokemonStringLowerCase);
  };
  const handleSubmit = () =>{
    if(pokemonName.trim().length !== 0){
      setPokemonSearch(pokemonName)
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
      <button onClick={handleSubmit}>Buscar</button>
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
      <button onClick={handleSubmit}>Buscar</button>


    <PokemonBasicInfo pokemonData={pokemon}/>
    <PokemonType type={pokemonTypes}/>
    <PokemonWeaknessStrength pokemonData={pokemon}/>

    </div>
  );
}

export default App;
