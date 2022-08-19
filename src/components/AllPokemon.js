import { useEffect, useState } from "react";
import api from "../services/api";
class PokemonObject {
  constructor(objeto){
    this.name = objeto.name
    this.type1 = objeto.types[0].type.name
    if (objeto.types.length > 1) {
      this.type2 = objeto.types[1].type.name
    }
    this.sprite = objeto.sprites.other.dream_world.front_default
    this.number = objeto.id
  }
}

function AllPokemon(){

  let data = []
  let result = []
  const [display,setDisplay] = useState([])
  const [limitList,setLimitList] = useState(20);

  useEffect(() => {
    Pokemons_array()
  },[limitList])

  async function Pokemons_array(){
    const PokemonList = await GetList()

    await Promise.all(PokemonList.map(async element => {
      const DATA_FETCH = await api
      .get(`pokemon/${element.name}`)
      .then((response) => data.push(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err)
      })

  }))

  await ReturnResult()
  }
  async function GetList(){
    const POKEMONS = await (
      await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limitList}`)
    ).json();
    return POKEMONS.results;

  }
  async function ReturnResult(){
    for (let i = 0; i < limitList; i++) {
      let ResultINScreen =  new PokemonObject(data[i])
      result.push(ResultINScreen)
    }
    result.sort(function(a,b) {
      return a.number - b.number;
  })
    console.log(result)
    setDisplay(result)
  }
  function ShowMore(){
    setLimitList(prevCount => prevCount + 30)
  }

    return(
        <div>   
          {display.map((item,index) =>(
          <>
          <img src={item.sprite} alt='pokemon name'></img>
          <h3>{item.name} #{item.number - 1}</h3>
          <ul>
            <li key={index}>{item.type1}</li>
            <li key={index+1}>{item.type2 ? item.type2 : ''}</li>
          </ul>

          </>
        ))}
        <button onClick={ShowMore}>Mostrar mais</button>
        </div>
    )
}
export default AllPokemon