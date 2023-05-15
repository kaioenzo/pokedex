import { useEffect, useState } from 'react';
import './App.css';
import PokemonBasicInfo from './components/PokemonBasicInfo';
import PokemonType from './components/PokemonType';
import PokemonWeaknessStrength from './components/PokemonWeakness';
import PokemonsList from './components/PokemonsList';
import api from './services/api';
import AutoComplete from './components/autocomplete/AutoComplete';
import { PokemonContext } from './context/PokemonContext';

function App() {
  const [pokemon, setPokemon] = useState(undefined);
  const [pokemonName, setPokemonName] = useState('');
  const pokemonTypes = [];

  useEffect(() => {
    if (pokemonName.length >= 3) {
      api
        .get(`pokemon/${pokemonName.toLocaleLowerCase()}`)
        .then((response) => setPokemon(response.data))
        .catch((err) => {
          console.error('ops! ocorreu um erro: ' + err);
        });
    }
  }, [pokemonName]);

  const handleChangeInput = (e) => {
    const pokemonInput = e.target.value.toLowerCase();

    if (pokemonInput.trim().length > 3) {
      setPokemonName(pokemonInput);
    } else {
      setPokemonName('');
      setPokemon(undefined);
    }
  };

  if (pokemon !== undefined) {
    for (let i = 0; i < pokemon.types.length; i++) {
      pokemonTypes.push(pokemon.types[i].type.name);
    }
  }

  if (pokemon === undefined) {
    return (
      <div>
        <PokemonContext.Provider value={{ pokemonName, setPokemonName }}>
          <AutoComplete />
          <PokemonsList />
        </PokemonContext.Provider>
      </div>
    );
  }

  return (
    <div className="App">
      <PokemonContext.Provider value={{ pokemon, setPokemon }}>
        <button
          onClick={() => {
            setPokemon(undefined);
            setPokemonName('');
          }}>
          Volta
        </button>
        <input
          type="text"
          name="search"
          id="search"
          onChange={handleChangeInput}
          placeholder="Blastoise"
          required
        />
        <PokemonBasicInfo pokemonData={pokemon} />
        <PokemonType type={pokemonTypes} />
        <PokemonWeaknessStrength pokemonData={pokemon} />
      </PokemonContext.Provider>
    </div>
  );
}

export default App;
