import { useState } from "react";

const Button = () => {
    return (
        <button className="button" type="submit">start match</button>
    )
}

export default Button;


/*
const handleSubmit = (e) => {
    e.preventDefault();
    console.log("du valde gubbe och startade"); 
    //This works. Needs to open AdventureMatch.js. 
    //Need to make sure it doesn't start without choosing a character (above)

    //function for starting adventure match 
    //Am I thinking of a link? 
    //but i also need to bring the character with me? 
}

onClick={handleSubmit}
*/