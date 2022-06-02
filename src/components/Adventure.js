import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import GridItem from "./GridItem";
import Button from "./Button";


const Adventure = () => {
    //I need to disable button until a character is chosen so I need a state. 
    const [buttonDisabled, setButtonDisabled] = useState(true);
    //Then I need to have an if else.
    //if a character is not chosen button is disabled, if chosen button is active 
    //But how is a character chosen? 
    //onClick should setChoosePokemon to whatever randomPokemonId is


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("du valde gubbe och startade"); 
        //This works. Needs to open AdventureMatch.js. 
        //Need to make sure it doesn't start without choosing a character (above)
    
        //function for starting adventure match 
        //Am I thinking of a link? 
        //but i also need to bring the character with me? 

    }

    return (
        <div className="adventure-container">
            <h1 className="adventure-title">choose character</h1>
            <div className="adventure-grid">
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
            </div>
            <Button type="submit" isDisabled={buttonDisabled} onClick={handleSubmit}>start match</Button>
        </div>
    )
}

export default Adventure;

/*
Tried to use state and stuff to get a picture from pokeapi. Tried 9 billion things. Did not work. 
Realised randomPokemonId was the same as the number in url 
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png


const initCharacter = {
    pokemonSpriteUrl: "", 
}

const Adventure = () => {
const [character, setCharacter] = useState(initCharacter);

const randomPokemonId = Math.floor(Math.random() * 151) + 1;

const getCharacter = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
    const json = await response.json();

    setCharacter({
        pokemonSpriteUrl: json.front_default, 
    });
}

useEffect (() => {
    getCharacter();
}, [])

console.log(randomPokemonId);
console.log(character);
*/

/*
    const randomPokemon = () => {
        return Math.floor(Math.random() * 151) + 1;
    } 

    const randomPokemonId = randomPokemon();

    ----------------

    <div className="grid-item">
        {`${character}`}
    </div>
    <div className="grid-item">
        {`${character.pokemonSpriteUrl}`}
    </div>
*/