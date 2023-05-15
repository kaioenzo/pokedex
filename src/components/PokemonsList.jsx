import { useCallback, useEffect, useMemo, useState } from 'react';
import Pokemon from '../models/Pokemon';
import api from '../services/api';
import TypeIcon from '../utils/TypeIcon';
import './styles.module.css';
import PokemonBasicCard from './PokemonBasicCard';
import { memo } from 'react';
import getBgColor from '../utils/getPokemonBgColor';

const PokemonsList = memo(function PokemonsList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [limitList, setLimitList] = useState(20);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const pokemonList = useMemo(() => {
    return pokemonData
      .map((pokemon) => ({
        ...pokemon,
        bgColor: getBgColor(pokemon.type1),
        type1: TypeIcon(pokemon.type1),
        typeList: [pokemon.type1, pokemon.type2],
        type2: pokemon.type2 ? TypeIcon(pokemon.type2) : null
      }))
      .sort((a, b) => a.number - b.number);
  }, [pokemonData]);

  const handlePokemons = useCallback(async () => {
    setIsLoading(true);
    const pokemonList = (await api.get(`pokemon?limit=${limitList}&offset=${offset}`)).data.results;

    const fetchedPokemons = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const fetchedPokemon = await api.get(`pokemon/${pokemon.name}`);
        return new Pokemon(fetchedPokemon.data);
      })
    );

    setPokemonData(fetchedPokemons);
    setIsLoading(false);
  }, [limitList, offset]);

  function showMore() {
    setLimitList((prevCount) => prevCount + 20);
  }

  function searchGen(genNumber) {
    switch (genNumber) {
      case 1:
        setOffset(0);
        setLimitList(20);
        break;
      case 2:
        setOffset(151);
        setLimitList(20);
        break;
      default:
        break;
    }
  }

  function showBefore() {
    console.log(offset - 20);
    setOffset((prevCount) => (prevCount - 20 >= 0 ? prevCount - 20 : prevCount));
    setLimitList((prevCount) => prevCount + 20);
  }
  console.log(offset);

  useEffect(() => {
    handlePokemons();
  }, [handlePokemons, limitList, offset]);

  return (
    <>
      <button onClick={() => searchGen(1)}>GEN I</button>
      <button onClick={() => searchGen(2)}>GEN II</button>
      <button onClick={showBefore}>Show before</button>
      {isLoading && <h1>Carregando...</h1>}
      <div className="flex-row align-center">
        <PokemonBasicCard pokemon={pokemonList} />
      </div>
      {!isLoading && <button onClick={showMore}>Mostrar mais</button>}
    </>
  );
});

export default PokemonsList;
