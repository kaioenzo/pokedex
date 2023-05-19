import { useContext, useState } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import { pokemons } from '../../data/AllPokemonsName';
import SuggestionList from './SuggestionList';

export default function Autocomplete() {
  const [state, setState] = useState({
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: ''
  });
  const { pokemon, setPokemon, setPokemonName } = useContext(PokemonContext);

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

    // User pressed the up arrow
    if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      // scroll list to element target
      const element = document.getElementById('suggestion-active');
      element?.scrollIntoView(false);
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
      // scroll list to element target
      const element = document.getElementById('suggestion-active');
      element?.scrollIntoView(true);

      setState({ ...state, activeSuggestion: activeSuggestion + 1 });
    }
  };
  return (
    <div className="flex-row">
      {pokemon !== undefined && (
        <button
          className="back-button"
          onClick={() => {
            setPokemon(undefined);
            setPokemonName('');
          }}>
          <span class="material-symbols-outlined">arrow_back</span>
        </button>
      )}
      <div>
        <input type="text" onChange={onChange} onKeyDown={onKeyDown} value={state.userInput} />
        {state.showSuggestions && state.userInput && (
          <SuggestionList
            id="suggestionList"
            filteredSuggestions={state.filteredSuggestions}
            onClick={onClick}
            activeSuggestion={state.activeSuggestion}
          />
        )}
      </div>
      <button className="search-button" onClick={() => setPokemonName(state.userInput)}>
        <span className="material-symbols-outlined">search</span>
      </button>
    </div>
  );
}
