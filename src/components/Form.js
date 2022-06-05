
import '../login.css';
import Poke from "../images/poke.png";
import LoginPage from "./LoginPage";


function Form() {
  return (
    <div className="main">
     <div className='sub-main'>
       <div>
          <div className='imgs'>
            <div className='container-image'>
            <img src={Poke} alt="picture of charmander" className='poke'></img>
            </div>
            <div>
            <h1>Login page</h1>
                <LoginPage />
            </div>
            </div>
        </div>
     </div>
    </div>
  );
}

export default Form;

