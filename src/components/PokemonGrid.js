import { useState,useEffect } from "react";
import api from "../services/api";

function PokemonGrid({data}){
    const [pokemonGridInfo,setPokemonGridInfo] = useState()
/*0:{
    name: "bulbasaur",
    sprite "https://pokeapi.co/api/v2/pokemon/4/",
    type: ["grass",poison]
}
*/
console.log(data.results)
data.results.forEach(element => {
        setPokemonGridInfo(element.name)
})

    // useEffect(() => {
    //     data.results.forEach(element => {
    //     api
    //     .get(`pokemon/${element.name}}`)
    //     .then((response) => setPokemonGridInfo([...response.data]))
    //     .catch((err) => {
    //     console.error("ops! ocorreu um erro: " + err);
    //     }    )
    //     },
    // [] ) } )
    //     console.log(pokemonGridInfo)
return(
    <>

    </>
)
}
export default PokemonGrid