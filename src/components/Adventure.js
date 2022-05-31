//Adventure is where the game takes place - where you end up when you hit "Play"
//Keep it simple. 

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

const initCharacter = {
    species: null,
}

const Adventure = () => {
    const [character, setCharacter] = useState(initCharacter); 
    //initialize state variables

    // function to get data from api
    const getCharacter = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
        const json = await response.json();

        setCharacter({
            species: json.species,
        })
    }

    // load api data when component mounts 
    useEffect(() => {
        getCharacter();
    })

    return (
        <div className="adventure-container">
            <h1 className="adventure-title">choose character</h1>
            <div className="adventure-grid">
                <div className="grid-item item-1">1</div>
                <div className="grid-item item-2">2</div>
                <div className="grid-item item-3">3</div>
                <div className="grid-item item-4">4</div>
                <div className="grid-item item-5">5</div>
                <div className="grid-item item-6">6</div>
                <div className="grid-item item-7">7</div>
                <div className="grid-item item-8">8</div>
            </div>
            <button className="button">start match</button>
        </div>
    )
}

export default Adventure;