//Extra: grid will show name of pokemon and possibly some type of stat. 

import {useState, useEffect} from "react";

const GridItem = ({thisPokemonId}) => {
    const [choosePokemon, setChoosePokemon] = useState(null);

    const randomPokemonId = Math.floor(Math.random() * 151) + 1;

    const handleChoice = (e) => {
        e.preventDefault();

        console.log("du klickade");

        {thisPokemonId = randomPokemonId;}
        console.log(thisPokemonId, randomPokemonId);

        //onClick should setChoosePokemon to whatever src is.
    }

    return (
        <div className="grid-item">
            <img className="grid-character" onClick={handleChoice} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemonId}.png`} />
        </div>
    )
}

export default GridItem;