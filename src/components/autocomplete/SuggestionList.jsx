import React from 'react';
import './styles.module.css';

function SuggestionList({ filteredSuggestions, onClick, activeSuggestion }) {
  return (
    <>
      <ul className="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
          let className;

          // Flag the active suggestion with a class
          if (index === activeSuggestion) {
            className = 'suggestion-active';
          }

          return (
            <li className={className} key={suggestion} onClick={onClick} id={className}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SuggestionList;
