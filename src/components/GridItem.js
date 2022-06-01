//Component for grid. 
//Each grid will call a function to generate a random pokemon. 
//Grid will also show name of pokemon and possibly some type of stat. 
//GridItem is imported by Adventure.js

//Question is if it needs to be a reusable component and function called from somewhere else
//to avoid all grid items being the same? 

import {useState, useEffect} from "react";

const GridItem = () => {
    const [choosePokemon, setChoosePokemon] = useState("");

    const randomPokemonId = Math.floor(Math.random() * 151) + 1;
    console.log(randomPokemonId);

    const handleChoice = (e) => {
        e.preventDefault();

        console.log("du klickade");
        console.log(randomPokemonId); 

        //Console log of randomPokemonId shows the same id as in the src
        //This need to be stored somehow so we can call the API to get attacks 

        //onClick should setChoosePokemon to whatever src is.
        //Can I do onChange and set a target value (randomPokemonId is value? current value?)
    }

    return (
        <div className="grid-item">
            <img className="grid-character" onClick={handleChoice} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemonId}.png`} />
        </div>
    )
}

export default GridItem;