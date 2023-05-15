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

    // User pressed the enter key
    if (e.keyCode === 13) {
      setState({
        ...state,
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
      setPokemonName(filteredSuggestions[activeSuggestion]);
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
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
      <>
        <input type="text" onChange={onChange} onKeyDown={onKeyDown} value={state.userInput} />
        <SuggestionList
          filteredSuggestions={state.filteredSuggestions}
          onClick={onClick}
          activeSuggestion={state.activeSuggestion}
        />
      </>
    );
  }

  return (
    <>
      <input type="text" onChange={onChange} onKeyDown={onKeyDown} value={state.userInput} />
      {!state.filteredSuggestions && (
        <div class="no-suggestions">
          <em>No suggestions, you're on your own!</em>
        </div>
      )}
    </>
  );
}

export default AutoComplete;
