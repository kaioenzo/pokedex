import { useEffect, useState } from "react";
import api from "../services/api";
function AllPokemon(){
    const [pokemon, SetPokemon] = useState()
    useEffect(() => {

          api
          .get(`pokemon/`)
          .then((response) => SetPokemon(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro: " + err);
          })

      }, [])
      console.log(pokemon)
    return(
        <h2>todos os pokemons</h2>
    )
}
export default AllPokemon