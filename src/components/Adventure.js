import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GridItem from "./GridItem";
import AdventureMatch from "./AdventureMatch";

const initPokemon = {
    pokemonSpriteUrl: null,
    pokemonName: null, 
    pokemonMoves: null, 
    pokemonId: null,
}

const pokemonData = [{
    pokemonName: "",
    pokemonSpriteUrl: "https://pokeapi.co/api/v2/pokemon/57",
    pokemonId: 1, 
    pokemonMoves: [],
},
{
    pokemonName: "",
    pokemonSpriteUrl: "https://pokeapi.co/api/v2/pokemon/106", 
    pokemonId: 2,
    pokemonMoves: [],
}, 
{
    pokemonName: "venusaur",
    pokemonSpriteUrl: "https://pokeapi.co/api/v2/pokemon/3", 
    pokemonId: 3,
    pokemonMoves: [],
},
{
    name: "starmie",
    url: "https://pokeapi.co/api/v2/pokemon/121", 
    id: 4,
    pokemonMoves: [],
}
]


const url = "https://pokeapi.co/api/v2/pokemon/2";
const urlRandom = "https://pokeapi.co/api/v2/pokemon/"; //`${urlRandom}${randomPokemonId}`

const Adventure = () => {
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

    /*
    {pokemon.map((p, i) => (
        <div key={i}>
            <GridItem id={p.id} name={p.name} />
        </div>)
    )}
    */

    const handleChoice = (e) => {
        //set the pokemon that was chosen
        console.log(`You chose ${pokemon.pokemonName} id ${pokemon.pokemonId}`);
        setButtonDisabled(false);
        //need to choose one of the pokemons attacks from the array at random. 
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
            </div>
            <button type="submit" className="button" disabled={buttonDisabled} onClick={handleSubmit}>start match</button>
        </div>
    )
}

export default Adventure;

/*
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png" />
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png" />
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" />
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png" />
*/

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