function PokemonBasicInfo ({pokemonData}){
    return(
        <div>
            <h1>{pokemonData.name} #{pokemonData.id}</h1>
            <img src={pokemonData.sprites.front_default} alt="pokemon sprite default" width="180px"></img>
            <img src={pokemonData.sprites.front_shiny} alt="pokemon sprite shiny" width="180px"></img>
            <h2>Peso: {pokemonData.weight/10}kg</h2>
            <h2>Altura: {pokemonData.height/10}m</h2>

        </div>
    )
}

export default PokemonBasicInfo