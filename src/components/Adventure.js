//Plan is to make a simple game using the pokeapi. 
//When user logs in they can choose an opponent and start match
//Opponent is a random character with random attack and random everything. 

//There is a grid with pokemons. 8 random characters. 
//User chooses a character to play so there is an onClick that sets the player character
//User then clicks button to start match (ie another onClick that opens a div with a background)
//Button for attack (also onClick)
//When clicking button it sets of a random attack from characters specifications

//Need function for a miss as well. Might be an extra. 

import {useState, useEffect} from "react";
import GridItem from "./GridItem";

const initCharacter = {
    pokemonName: "",
    pokemonSpriteUrl: "", 
}

const Adventure = () => {
    const [character, setCharacter] = useState(initCharacter);

    const randomPokemonId = Math.floor(Math.random() * 151) + 1;

    const getCharacter = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
        const json = response.json();

        setCharacter({
            pokemonName: json.name,
            pokemonSpriteUrl: json.sprites,
        })
    }


    return (
        <div className="adventure-container">
            <h1 className="adventure-title">choose character</h1>
            <div className="adventure-grid">
                <div className="grid-item">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png" />
                </div>
                <div className="grid-item">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png" />
                </div>
            </div>
            <button className="button">start match</button>
        </div>
    )
}

export default Adventure;