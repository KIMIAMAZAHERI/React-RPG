import { useState } from "react";
import GridItem from "./GridItem";

const initPokemon = {
    pokemonSpriteUrl: null,
    pokemonName: null, 
    pokemonMoves: null, 
    pokemonId: null,
}

const StartAdventure = () => {
    const [pokemon, setPokemon] = useState();
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const gridPokemons = [
        {
            pokemonId: 1,
            pokemonMoves: [],
            pokemonName: "Primeape",
            imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png", 
            url: "https://pokeapi.co/api/v2/pokemon/57"
        },
        {
            pokemonId: 2,
            pokemonMoves: [],
            pokemonName: "Hitmonlee",
            imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png", 
            url: "https://pokeapi.co/api/v2/pokemon/106"
        },
        {
            pokemonId: 3,
            pokemonMoves: [],
            pokemonName: "Venusaur",
            imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
            url: "https://pokeapi.co/api/v2/pokemon/3" 
        },
        {
            pokemonId: 4,
            pokemonMoves: [],
            pokemonName: "starmie",
            imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
            url: "https://pokeapi.co/api/v2/pokemon/121" 
        },
    ];

    console.log(gridPokemons[2].pokemonName); 

    const handleChoice = () => {
        console.log("You made a choice")
    }

    const handleSubmit = () => {
        console.log("you clicked");
    }
    
    return (
    <div className="adventure-container">
        <h1 className="adventure-title">choose character</h1>
            <div className="adventure-grid">
                {
                    gridPokemons.map(pObj=>(
                            <GridItem>
                                <div className="grid-character" onClick={handleChoice} key={pObj.pokemonId}><img src={pObj.imgUrl} /></div>
                                <p key={pObj.pokemonId}>{pObj.pokemonName}</p>
                            </GridItem>
                    ))
                }
            </div>
        <button type="submit" disabled={buttonDisabled} onClick={handleSubmit} className="button">start match</button>
    </div>
    )
}

export default StartAdventure;

/*
starting over completely. 

What am I doing? 

I need an array with objects (pokemons, hardcoded)
They are going to be mapped in to the GridItem. 
When a grid is clicked a state is set. 

*/

    /*
    {pokemon.map((p, i) => (
        <div key={i}>
            <GridItem id={p.id} name={p.name} />
        </div>)
    )}
    */

/*
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png" /> primeape
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png" /> hitmonlee
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" /> venusaur
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png" /> starmie
*/

