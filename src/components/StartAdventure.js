import { useState } from "react";
import GridItem from "./GridItem";

const gridPokemons = [
    {
        id: 1,
        moves: [],
        name: "Primeape",
        imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png", 
        url: "https://pokeapi.co/api/v2/pokemon/57"
    },
    {
        id: 2,
        moves: [],
        name: "Hitmonlee",
        imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png", 
        url: "https://pokeapi.co/api/v2/pokemon/106"
    },
    {
        id: 4,
        moves: [],
        name: "Venusaur",
        imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        url: "https://pokeapi.co/api/v2/pokemon/3" 
    },
    {
        id: 4,
        moves: [],
        name: "starmie",
        imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
        url: "https://pokeapi.co/api/v2/pokemon/121" 
    },
];

const StartAdventure = () => {
    const [pokemon, setPokemon] = useState(gridPokemons);
    const [buttonDisabled, setButtonDisabled] = useState(true);

//  console.log(pokemon);

    const handleChoice = (e) => {
        console.log("You made a choice");
        //need to set state
        //so I need to fetch data from api
        setButtonDisabled(false);
    }

    const handleSubmit = (e) => {
        console.log("you clicked");
    }
    
    return (
    <div className="adventure-container">
        <h1 className="adventure-title">choose character</h1>
            <div className="adventure-grid">
                <GridItem>
                    {
                        gridPokemons.map(pObj=>(
                            <GridItem>
                                <div className="grid-character" key={pObj.imgUrl}><img onClick={handleChoice} src={pObj.imgUrl} /></div>
                                <p key={pObj.name}>{pObj.name}</p>
                            </GridItem>
                        ))
                    }
                </GridItem>
            </div>
        <button type="submit" disabled={buttonDisabled} onClick={handleSubmit} className="button">start match</button>
    </div>
    )
}

export default StartAdventure;

/*
                {
                    gridPokemons.map(pObj=>(
                        <GridItem>
                            <div className="grid-character" key={pObj.imgUrl} ><img onClick={handleChoice} src={pObj.imgUrl} /></div>
                            <p key={pObj.pokemonName} >{pObj.pokemonName}</p>
                        </GridItem>
                    ))
                }

    -----
    .map notes 

    Object.values(gridPokemons).map(grids => console.log(grids))
    logs the data in the array
    cant pull the image
    so will put img as img source and just keep the data there

    const gridDisplay = () => {
        Object.values(gridPokemons).map(grids => console.log(grids))
    }

    and in GridItem: 
                        {
                        gridPokemons.map((grids) => (
                            <img onClick={handleChoice} src={grids.imgUrl}/>
                        ))
                    }


*/






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

