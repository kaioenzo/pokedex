import Types from './index';
function TypeIcon(type) {
  switch (type) {
    case 'grass':
      type = Types.grass;
      return type;

    case 'fire':
      type = Types.fire;
      return type;

    case 'poison':
      type = Types.poison;
      return type;

    case 'ice':
      type = Types.ice;
      return type;

    case 'water':
      type = Types.water;
      return type;

    case 'ground':
      type = Types.ground;
      return type;

    case 'rock':
      type = Types.rock;
      return type;

    case 'bug':
      type = Types.bug;
      return type;

    case 'dark':
      type = Types.dark;
      return type;

    case 'psychic':
      type = Types.psychic;
      return type;

    case 'fighting':
      type = Types.fighting;
      return type;

    case 'fairy':
      type = Types.fairy;
      return type;

    case 'dragon':
      type = Types.dragon;
      return type;

    case 'electric':
      type = Types.electric;
      return type;

    case 'flying':
      type = Types.flying;
      return type;

    case 'ghost':
      type = Types.ghost;
      return type;

    case 'normal':
      type = Types.normal;
      return type;

    case 'steel':
      type = Types.steel;
      return type;

    default:
  }
}
export default TypeIcon;
