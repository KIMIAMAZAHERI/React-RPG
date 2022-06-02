import { useState, useEffect, useContext } from "react";
import Button from "./Button";
//import GridItem from "./GridItem";

const initCharacter = {
    pokemonSpriteUrl: null,
    pokemonName: null, 
    pokemonMoves: null, 
    pokemonID: null,
}

const NewAdventure = () => {
    const [character, setCharacter] = useState(initCharacter);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const randomPokemonId = Math.floor(Math.random() * 151) + 1;

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

    return (
        <div className="adventure-container">
            <h1 className="adventure-title">choose character</h1>
            <div className="adventure-grid">
                <div className="grid-item">
                    <img src={`${character.pokemonSpriteUrl}`} />
                </div>
                <div className="grid-item">
                    <img src={`${character.pokemonSpriteUrl}`} />
                </div>
            </div>
            <Button type="submit" isDisabled={buttonDisabled} onClick={handleSubmit}>start match</Button>
        </div>
    )
}

export default NewAdventure;