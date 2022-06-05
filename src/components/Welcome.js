import ImageDisplay from "./ImageDisplay";


const Welcome = () => {
   /* const[openLoginModal, setOpenLoginModal]= usestate (false);
    const[openPlay, setOpenPlay]= usestate (false);*/

    return(
        <div>
            <div className="welcome-container">
                <h1>Poke-a-fight</h1>
                <div className="welcome-btn">
                    <button>PLAY</button>
                    <button>SIGNUP</button> 
                </div>
            </div>
            <ImageDisplay />
        </div>
    );
}
export default Welcome;


// I'M THINKING WE INSEERT THIS AND THE CODE ABOVE ONCE WE HAVE THE PIECES TOGETHER. I THINK WE CAN CALL FOR THE MODALS HERE.

/*<button
onClick={() => {
    setOpenLoginModal(true);
}}
>PLAY</button>
<button
 onClick={() => {
    setPlay(true);
}}
>SIGNUP</button> 
</div>*/