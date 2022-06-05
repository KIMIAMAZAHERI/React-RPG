import pokemon from "../images/pokemons.png";

const ImageDisplay = () => {
   /*  return (
        <div className="image-container">
            style={{
                display: "flex",
                justifyContent: "center",
                aliignItems: "center",
                flexDirection: "column"
            }}
            
            <img src={pokemon} alt="pokemon with fire tail" height={250} width={250} />
        </div>
    ); */
    return (
    <div className="img-container">
        <img src={pokemon} />
    </div>
    )
}
export default ImageDisplay;



/*return (<img src={pokemon} />)
}
export default ImageDisplay;*/