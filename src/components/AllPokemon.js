import { useEffect, useState } from "react";
import Types from '../assets/index'
import api from "../services/api";
import TypeIcon from "./TypeIcon";

class PokemonObject {
  constructor(objeto){
    this.name = objeto.name
    this.type1 = objeto.types[0].type.name
    if (objeto.types.length > 1) {
      this.type2 = objeto.types[1].type.name
    }
    this.sprite = objeto.sprites.other['official-artwork'].front_default
    this.number = objeto.id
  }
}

function AllPokemon(){

  let data = []
  let result = []
  const [display,setDisplay] = useState([])
  const [limitList,setLimitList] = useState(20);
  const [offset,setOffset] = useState(0);

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
      await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limitList}&offset=${offset}`)
    ).json();
    return POKEMONS.results;

  }
  async function ReturnResult(){
    for (let i = 0; i < limitList; i++) {
      const POKEMON_OBJECT =  new PokemonObject(data[i])
      result.push(POKEMON_OBJECT)
    }
    result.sort(function(a,b) {
      return a.number - b.number;
  })
    setDisplay(result)
  }

  function ShowMore(){
    setLimitList(prevCount => prevCount + 20)
  }

  function Gen2(){
    setOffset(151)
    setLimitList(100)
  }

    for (let i = 0; i < display.length; i++) {
      display[i].type1 = TypeIcon(display[i].type1)
      if (display[i].type2) {
        display[i].type2 = TypeIcon(display[i].type2)
      }
    }

    return(
      <>
        <button onClick={Gen2}>GEN II</button>
        <br></br>
          {display.map((item,index) =>(
          <div>
              <img src={item.sprite} alt='pokemon name'></img>
              <h3>{item.name} #{item.number}</h3>

                  {item.type1}
                  {item.type2}

          </div>
                      ))
          }
        <button onClick={ShowMore}>Mostrar mais</button>

      </>
  )
}
export default AllPokemon