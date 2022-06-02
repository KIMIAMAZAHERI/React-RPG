import { useState, useEffect, useContext } from "react";
import Button from "./Button";
//import GridItem from "./GridItem";

const initCharacter = {
    pokemonSpriteUrl: "",
    pokemonName: "", 
    pokemonMoves: [], 
}

const NewAdventure = () => {
    const [character, setCharacter] = useState(initCharacter);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const randomPokemonId = Math.floor(Math.random() * 151) + 1;

    const getCharacter = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
        const json = await response.json();

    setCharacter({
        pokemonSpriteUrl: json.data.sprites.front_default, 
        pokemonName: json.data.name, 
        pokemonMoves: json.data.moves, 
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
                    {`${character.pokemonSpriteUrl}`}
                </div>
                <div className="grid-item">
                    {`${character}`}
                </div>
            </div>
            <Button type="submit" isDisabled={buttonDisabled} onClick={handleSubmit}>start match</Button>
        </div>
    )
}

export default NewAdventure;