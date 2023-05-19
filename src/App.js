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
  const [pokemonName, setPokemonName] = useState(undefined);
  const pokemonTypes = [];

  useEffect(() => {
    console.log(pokemonName);
    if (pokemonName?.length >= 3) {
      api
        .get(`pokemon/${pokemonName.toLocaleLowerCase()}`)
        .then((response) => setPokemon(response.data))
        .catch((err) => {
          console.error('ops! ocorreu um erro: ' + err);
          setPokemon(undefined);
        });
    }
  }, [pokemonName]);

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

  const Header = () => {
    return (
      <div className="flex-row">
        {pokemon !== undefined && (
          <button
            onClick={() => {
              setPokemon(undefined);
              setPokemonName('');
            }}>
            Voltar
          </button>
        )}
        <AutoComplete />
      </div>
    );
  };

  return (
    <div className="App">
      <PokemonContext.Provider value={{ pokemonName, setPokemonName }}>
        <Header />
        <PokemonBasicInfo pokemonData={pokemon} />
        <PokemonType type={pokemonTypes} />
        <PokemonWeaknessStrength pokemonData={pokemon} />
      </PokemonContext.Provider>
    </div>
  );
}

export default App;
