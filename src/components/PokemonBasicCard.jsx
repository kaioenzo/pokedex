import React from 'react';

function PokemonBasicCard({ pokemon }) {
  return (
    <>
      {pokemon.map((item, index) => (
        <div
          key={item.number}
          className="pokemon-card flex-column"
          style={{ background: item.bgColor }}>
          <a href="">
            <img src={item.sprite} alt="pokemon"></img>
            <h3>
              {item.name} #{item.number}
            </h3>
            <div className="pokemon-card-type">
              <span>{item.type1}</span>
              <span>{item.typeList[0]}</span>
            </div>
            {item.typeList[1] && item.type2 && (
              <div className="pokemon-card-type">
                <span>{item.type2}</span>
                <span>{item.typeList[1]}</span>
              </div>
            )}
          </a>
        </div>
      ))}
    </>
  );
}

export default PokemonBasicCard;
