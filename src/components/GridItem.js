//Component for grid. 
//Each grid will call a function to generate a random pokemon. 
//Grid will also show name of pokemon and possibly some type of stat. 
//GridItem is imported by Adventure.js

//Question is if it needs to be a reusable component and function called from somewhere else
//to avoid all grid items being the same? 


import {useState, useEffect} from "react";

const initCharacter = {
    pokemonName: "",
    pokemonSpriteUrl: "",
}

const GridItem = () => {
    const [character, setCharacter] = useState(initCharacter); 
    //initialize state variables

    const randomPokemonId = Math.floor(Math.random() * 151) + 1;

    // function to get data from api
    const getCharacter = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.randomPokemonId}`);
        const json = await response.json();

        setCharacter({
            
        })
    }

    // load api data when component mounts 
    useEffect(() => {
        getCharacter();
    })

    return (
        <div className="grid-item">grid item</div>
    )
}

export default GridItem;