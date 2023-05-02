import { useCallback, useEffect, useState } from 'react';
import Pokemon from '../models/Pokemon';
import api from '../services/api';
import TypeIcon from './TypeIcon';
import './styles.module.css';

function PokemonsList() {
  const [display, setDisplay] = useState([]);
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
    setDisplay(pokemonList);
    setIsLoading(false);
  }, [limitList, offset]);

  function showMore() {
    setLimitList((prevCount) => prevCount + 20);
  }

  function searchGen2() {
    setOffset(151);
    setLimitList(100);
  }

  useEffect(() => {
    handlePokemons();
  }, [handlePokemons, limitList, offset]);

  return (
    <>
      {isLoading && <h1>Carregando...</h1>}
      <button onClick={searchGen2}>GEN II</button>
      {display.map((item, index) => (
        <div className="container" key={item.number}>
          <img src={item.sprite} alt="pokemon name"></img>
          <h3>
            {item.name} #{item.number}
          </h3>

          {item.type1}
          {item.type2}
        </div>
      ))}
      <button onClick={showMore}>Mostrar mais</button>
    </>
  );
}
export default PokemonsList;
