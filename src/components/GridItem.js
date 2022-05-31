//Component for grid. 
//Each grid will call a function to generate a random pokemon. 
//Grid will also show name of pokemon and possibly some type of stat. 
//GridItem is imported by Adventure.js

//Question is if it needs to be a reusable component and function called from somewhere else
//to avoid all grid items being the same? 


import {useState, useEffect} from "react";

const GridItem = () => {
    const randomPokemonId = Math.floor(Math.random() * 151) + 1;

    return (
        <div className="grid-item">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemonId}.png`} />
        </div>
    )
}

export default GridItem;