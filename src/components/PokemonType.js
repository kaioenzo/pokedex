
function PokemonType({type}){
    const pokemonType = type.map((item, index) => <li key={index}>{item}</li>)


    return(
        <div>
            <h2>Tipo</h2>
        <ul>
            {pokemonType}
        </ul>

        </div>
    )

return
}
export default PokemonType