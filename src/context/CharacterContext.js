import { createContext, useState } from "react";

const CharacterContext = createContext();

export const CharacterProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState([
        //data
    ])

    return
}