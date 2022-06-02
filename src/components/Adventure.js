import { BrowserRouter, Route, Routes, Link, Router } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import GridItem from "./GridItem";
import AdventureMatch from "./AdventureMatch";


const Adventure = () => {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    //Then I need to have an if else.
    //if a character is not chosen button is disabled, if chosen button is active 
    //But how is a character chosen? 
    //onClick should setChoosePokemon to whatever randomPokemonId is (in GridItem) 
    //Need to do the function in GridItema and pass it here? 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("du valde gubbe och startade"); 
        window.location = "/AdventureMatch" //needs to be fixed. google.com works lol 
        //Need function for starting adventure match 
        //Am I thinking of a link? 
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
            <button type="submit" className="button" disabled={buttonDisabled} onClick={handleSubmit}>start match</button>
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
        {`${character.pokemonSpriteUrl}`}
    </div>
    <div className="grid-item">
        {`${character.pokemonSpriteUrl}`}
    </div>
*/