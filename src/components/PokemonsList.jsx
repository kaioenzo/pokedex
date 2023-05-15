import { useCallback, useEffect, useState } from 'react';
import Pokemon from '../models/Pokemon';
import api from '../services/api';
import TypeIcon from './TypeIcon';
import './styles.module.css';
import PokemonBasicCard from './PokemonBasicCard';

function PokemonsList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [limitList, setLimitList] = useState(20);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handlePokemons = useCallback(async () => {
    setIsLoading(true);
    let pokemonList = (await api.get(`pokemon?limit=${limitList}&offset=${offset}`)).data.results;

    pokemonList = await Promise.all(
      pokemonList.map(async (pokemon) => {
        let element = await (await api.get(`pokemon/${pokemon.name}`)).data;
        element = new Pokemon(element);
        element.type1 = TypeIcon(element.type1);
        if (element.type2) {
          element.type2 = TypeIcon(element.type2);
        }
        return element;
      })
    );

    pokemonList.sort(function (a, b) {
      return a.number - b.number;
    });

    setPokemonData(pokemonList);
    setIsLoading(false);
  }, [limitList, offset]);

  function showMore() {
    setLimitList((prevCount) => prevCount + 20);
  }

  function searchGen(genNumber) {
    switch (genNumber) {
      case 1:
        setOffset(0);
        break;
      case 2:
        setOffset(151);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    handlePokemons();
  }, [handlePokemons, limitList, offset]);

  return (
    <>
      <button onClick={() => searchGen(1)}>GEN I</button>
      <button onClick={() => searchGen(2)}>GEN II</button>
      {isLoading && <h1>Carregando...</h1>}
      <div className="flex-row align-center">
        <PokemonBasicCard pokemon={pokemonData} />
      </div>

      <button onClick={showMore}>Mostrar mais</button>
    </>
  );
}
export default PokemonsList;
