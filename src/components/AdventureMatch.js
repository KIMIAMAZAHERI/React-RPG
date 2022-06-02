//This is the component where the match will take place
//We need a hard coded opponent
//The character that is chosen in adventure.js needs to be imported here. 
//So I need to catch whatever `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemonId}.png` was
//and display in match-container
//State is put in GridItem (choosePokemon, setChoosePokemon)

//Need function for a miss as well. Might be an extra. 
import { useState, useEffect } from "react";
import GridItem from "./GridItem";


const initCharacter = {
    pokemonSpriteUrl: null,
    pokemonName: null, 
    pokemonMoves: null, 
    pokemonID: null,
}

const randomPokemonId = Math.floor(Math.random() * 151) + 1;

const AdventureMatch = ({thisPokemonId}) => {
    const [character, setCharacter] = useState(initCharacter);

    const getCharacter = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
        const json = await response.json();

        setCharacter({
            pokemonSpriteUrl: json.sprites.front_default, 
            pokemonName: json.name, 
            pokemonMoves: json.moves, 
        });
    }

    useEffect (() => {
        getCharacter();
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("du valde gubbe och startade"); 
    }

    console.log(character);
   
    
    
    return (
        <div className="match-container">
            <img src={`${character.pokemonSpriteUrl}`} />
        </div>
    )
}

export default AdventureMatch;