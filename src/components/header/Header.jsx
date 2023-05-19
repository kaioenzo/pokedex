import React from 'react';
import Autocomplete from '../autocomplete/Autocomplete';

function Header() {
  return (
    <div className=" flex-row justify-between search-bar">
      <div>
        <h1>Pokedex</h1>
      </div>
      <div>
        <Autocomplete />
      </div>
      <span></span>
    </div>
  );
}
export default Header;
