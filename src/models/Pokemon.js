class Pokemon {
  constructor(objeto) {
    this.name = objeto.name;
    this.type1 = objeto.types[0].type.name;
    if (objeto.types.length > 1) {
      this.type2 = objeto.types[1].type.name;
    }
    this.sprite = objeto.sprites.other['official-artwork'].front_default;
    this.number = objeto.id;
  }
}
export default Pokemon;