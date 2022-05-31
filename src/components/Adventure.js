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
import GridItem from "./GridItem";

const Adventure = () => {
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
            <button className="button">start match</button>
        </div>
    )
}

export default Adventure;