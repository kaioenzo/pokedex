const getBgColor = (colorName) => {
  switch (colorName) {
    case 'grass':
      return '#B8ee90';
    case 'water':
      return '#Afeaf9';
    case 'fire':
      return '#F9b081';
    case 'bug':
      return '#9ea463';
    case 'normal':
      return '#C5c5c4';
    case 'poison':
      return '#b97fc9';
    case 'electric':
      return '#F5ec8c';
    case 'ground':
      return '#e0c068';
    case 'fairy':
      return '#Efa8b8';
    case 'fighting':
      return '#F96a56';
    case 'psychic':
      return '#F37ddd';
    case 'rock':
      return '#b6a136';
    case 'ghost':
      return '#735797';
    case 'ice':
      return '#bce6e6';
    case 'dragon':
      return '#7abdf7';
    case 'dark':
      return '#535658';
    case 'steel':
      return '#b8b8d0';
    default:
      return '#A8A77A';
  }
};

export default getBgColor;
