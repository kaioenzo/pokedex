import types_data from "./types_data";


function PokemonWeaknessStrength({pokemonData}){



    let weaknesses = {}
    pokemonData.types.forEach(item =>{
        let defense = types_data[item.type.name].defense;
        Object.entries(defense).forEach(([key, value]) => {
            // eslint-disable-next-line default-case
            switch(key){
                case('double'):
                    value.forEach(i => {weaknesses[i] ? weaknesses[i] *= 2 : weaknesses[i] = 2});
                    break
                case('half'):
                    value.forEach(i => {weaknesses[i] ? weaknesses[i] *= .5 : weaknesses[i] = .5});
                    break
                case('zero'):
                    value.forEach(i => {weaknesses[i] = 0});
                    break
            }
        })
    })
    console.log(weaknesses)
    const effectiveness = []
    const weaknessDisplay = []


      Object.keys(weaknesses).forEach((item) => {
        console.log(item + " = " + weaknesses[item]);
        weaknessDisplay.push(<li>{item} - {weaknesses[item]}</li>);
      });
    //   Object.keys(weaknesses).forEach((item) => {
    //     console.log(item + " = " + weaknesses[item]);
    //     if (weaknesses[item]===2) {
    //         effectiveness.push(item)
    //     }
    //   });
      console.log(effectiveness)



    return(
        <>
        <h3>Efetividade do tipo</h3>
        <ul>
        {weaknessDisplay}
        </ul>
        </>
    )
}
export default PokemonWeaknessStrength
