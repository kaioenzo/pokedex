import React, { useContext, useState } from 'react';
import { pokemons } from '../../data/AllPokemonsName';
import SuggestionList from './SuggestionList';
import './styles.module.css';
import { PokemonContext } from '../../context/PokemonContext';

function AutoComplete() {
  const [state, setState] = useState({
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: ''
  });

  const { pokemonName, setPokemonName } = useContext(PokemonContext);

  const onChange = (e) => {
    const userInput = e.currentTarget.value;

    if (!userInput) {
      setPokemonName(undefined);
    }

    const filteredSuggestions = pokemons.filter(
      (pokemon) => pokemon.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: userInput.length > 0,
      userInput: e.currentTarget.value
    });
  };

  const onClick = (e) => {
    setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  const onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions } = state;

    // scroll list to element target
    const element = document.getElementById('suggestion-active');
    element?.scrollIntoView(false);

    // User pressed the up arrow
    if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      setState({ ...state, activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (
        activeSuggestion - 1 === filteredSuggestions.length ||
        activeSuggestion >= filteredSuggestions.length - 1
      ) {
        return;
      }

      setState({ ...state, activeSuggestion: activeSuggestion + 1 });
    }
  };

  if (state.showSuggestions && state.userInput && state.filteredSuggestions.length) {
    return (
      <div>
        <input type="text" onChange={onChange} onKeyDown={onKeyDown} value={state.userInput} />
        <SuggestionList
          id="suggestionList"
          filteredSuggestions={state.filteredSuggestions}
          onClick={onClick}
          activeSuggestion={state.activeSuggestion}
        />
      </div>
    );
  }

  const search = (e) => {
    setPokemonName(state.userInput);
  };
  return (
    <div>
      <input type="text" onChange={onChange} onKeyDown={onKeyDown} value={state.userInput} />
      <button onClick={search}>Buscar</button>
      {(!state.filteredSuggestions && state.userInput) ||
        (state.showSuggestions === true && state.userInput && (
          <div class="no-suggestions">
            <em>No suggestions!</em>
          </div>
        ))}
    </div>
  );
}

export default AutoComplete;
