import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GridItem from "./GridItem";
import AdventureMatch from "./AdventureMatch";
import { isDisabled } from "@testing-library/user-event/dist/utils";


const url = "https://pokeapi.co/api/v2/pokemon/2";
const urlRandom = "https://pokeapi.co/api/v2/pokemon/"

const initPokemon = {
    pokemonSpriteUrl: null,
    pokemonName: null, 
    pokemonMoves: null, 
    pokemonId: null,
}

const Adventure = ({pokemonSpriteUrl, name, moves, id}) => {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [pokemon, setPokemon] = useState(initPokemon);

    const randomPokemonId = Math.floor(Math.random() * 151) + 1;

    const getPokemon = async () => {
        const response = await fetch(`${urlRandom}${randomPokemonId}`);
        const data = await response.json();
        
        setPokemon({
            pokemonSpriteUrl: data.sprites.front_default, 
            pokemonName: data.name, 
            pokemonMoves: data.moves, 
            pokemonId: data.id
        }); 
    }

    useEffect(() => {
        getPokemon();
    }, [])

    const handleChoice = (e) => {
        e.preventDefault();
        //set the pokemon that was chosen
        console.log(`You chose ${pokemon.pokemonName}`);
        setButtonDisabled(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("du valde gubbe och startade"); 
        //should open /adventureMatch
    }

    return (
        <div className="adventure-container">
            <h1 className="adventure-title">choose character</h1>
            <div className="adventure-grid">
                <GridItem>
                    <img onClick={handleChoice} src={pokemon.pokemonSpriteUrl} />
                </GridItem>
                <GridItem>
                    <img onClick={handleChoice} src={pokemon.pokemonSpriteUrl} />
                </GridItem>
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