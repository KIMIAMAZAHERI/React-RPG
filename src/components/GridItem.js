//Extra: grid will show name of pokemon and possibly some type of stat. 

import {useState, useEffect} from "react";

const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


const GridItem = ({children}) => {
    return (
        <div className="grid-item">
            {children}
        </div>
    )
}

export default GridItem;

/*
------------------------
BEFORE COACHING
------------------------
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
*/

    /*
--------------------
COACHING THINGS
--------------------
    const [choosePokemon, setChoosePokemon] = useState({
        id: "",
    });
    randomPokemonId = Math.floor(Math.random() * 151) + 1;
    const imgSrc = `${POKE_API}/${randomPokemonId}.png`
*/
    /*
    const setPokemon = () => {
        setChoosePokemon({
            url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.floor(Math.random() * 151) + 1}`,
        })
    console.log(choosePokemon);
    }
*/

/*
    const handleChoice = (e) => {
        e.preventDefault();

        console.log("du klickade");
        console.log(randomPokemonId);

        setChoosePokemon({pokemon: randomPokemonId});
        console.log(choosePokemon);
        //onClick should setChoosePokemon to whatever src is.
    }
    */