//Component for grid. 
//Each grid will call a function to generate a random pokemon. 
//Grid will also show name of pokemon and possibly some type of stat. 
//GridItem is imported by Adventure.js

//Question is if it needs to be a reusable component and function called from somewhere else
//to avoid all grid items being the same? 

import {useState, useEffect} from "react";

const initCharacter = {
    species: null,
}

const GridItem = () => {
    const [character, setCharacter] = useState(initCharacter); 
    //initialize state variables

    // function to get data from api
    const getCharacter = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
        const json = await response.json();

        setCharacter({
            species: json.species,
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