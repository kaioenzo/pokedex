/* eslint-disable default-case */
import types_data from '../data/types_data';

function PokemonWeaknessStrength({ pokemonData }) {
  const allTypes = [
    'normal',
    'fire',
    'fighting',
    'water',
    'flying',
    'grass',
    'poison',
    'electric',
    'ground',
    'psychic',
    'rock',
    'ice',
    'bug',
    'dragon',
    'ghost',
    'dark',
    'steel',
    'fairy'
  ];
  const weaknessDisplay = [];
  const immuneDisplay = [];
  const resistantDisplay = [];
  const weakTo = [];
  const immuneTo = [];
  const resistantTo = [];
  const normalDisplay = [];
  let weaknesses = {};

  //set values of effectiveness of defense against each type
  pokemonData.types.forEach((item) => {
    let defense = types_data[item.type.name].defense;
    Object.entries(defense).forEach(([key, value]) => {
      // eslint-disable-next-line default-case
      switch (key) {
        case 'double':
          value.forEach((i) => {
            weaknesses[i] ? (weaknesses[i] *= 2) : (weaknesses[i] = 2);
          });
          break;
        case 'half':
          value.forEach((i) => {
            weaknesses[i] ? (weaknesses[i] *= 0.5) : (weaknesses[i] = 0.5);
          });
          break;
        case 'zero':
          value.forEach((i) => {
            weaknesses[i] = 0;
          });
          break;
      }
    });
  });
  //set normal damage by types that aren't in list of weakness
  Object.keys(weaknesses).forEach((item, value) => {
    for (let index = 0; index < allTypes.length; index++) {
      if (item === allTypes[index]) {
        allTypes.splice([index], 1);
      }
    }
  });

  //set weakness,resistance and immunity
  Object.keys(weaknesses).forEach((item) => {
    switch (weaknesses[item]) {
      case 2:
        weakTo.push(item);
        break;
      case 0:
        immuneTo.push(item);
        break;
      case 0.5:
        resistantTo.push(item);
        break;
    }
  });

  //loop for component exibitions
  Object.values(weakTo).forEach((item) => {
    weaknessDisplay.push(
      <li>
        {item} - {weaknesses[item]}x
      </li>
    );
  });
  Object.values(immuneTo).forEach((item) => {
    immuneDisplay.push(
      <li>
        {item} - {weaknesses[item]}
      </li>
    );
  });
  Object.values(resistantTo).forEach((item) => {
    resistantDisplay.push(
      <li>
        {item} - {weaknesses[item]}x
      </li>
    );
  });
  Object.values(allTypes).forEach((item) => {
    normalDisplay.push(<li>{item} - 1x</li>);
  });

  return (
    <>
      <h3>Efetividade</h3>
      <ul>
        <span>Fraco contra</span>
        {weaknessDisplay}
      </ul>
      <ul>
        <span>Resistente contra</span>
        {resistantDisplay}
      </ul>
      <ul>
        <span>Imune contra</span>
        <br></br>
        {immuneTo > 0 ? immuneTo : 'Nenhum'}
      </ul>
      <ul>
        <span>Normal contra</span>
        <br></br>
        {normalDisplay}
      </ul>
    </>
  );
}
export default PokemonWeaknessStrength;
