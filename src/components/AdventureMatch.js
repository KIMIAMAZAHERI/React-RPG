//This is the component where the match will take place
//We need a hard coded opponent
//The character that is chosen in adventure.js needs to be imported here. 
//So I need to catch whatever `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemonId}.png` was
//and display in match-container
//State is put in GridItem (choosePokemon, setChoosePokemon)

//Need function for a miss as well. Might be an extra. 


import Image from "./Image";
import trees from "../images/trees.jpg";

const AdventureMatch = () => {
    return (
        <div className="match-container">
            
        </div>
    )
}

export default AdventureMatch;

//<Image> <img src={trees} width={700} /> </Image> 