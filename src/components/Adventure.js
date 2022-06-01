//Plan is to make a simple game using the pokeapi. 
//When user logs in they can choose an opponent and start match
//Opponent is a random character with random attack and random everything. 

//There is a grid with pokemons. 8 random characters. 
//User chooses a character to play so there is an onClick that sets the player character
//User then clicks button to start match (ie another onClick that opens a div with a background)
//Button for attack (also onClick)
//When clicking button it sets of a random attack from characters specifications

//Need function for a miss as well. Might be an extra. 

//Need handleSubmit
//Need onClick

import { BrowserRouter, Route, Routes } from "react-router-dom";

import GridItem from "./GridItem";



const Adventure = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("du valde gubbe och startade"); //This works. Needs to open AdventureMatch.js. 
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
            <button onClick={handleSubmit} className="button">start match</button>
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