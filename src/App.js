//TODOS
//1. Make sure components are working - DONE
//2. Set up Github - DONE
//3. Set up routing - what routing do we need? 

import {Routes, Route, BrowserRouter} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

//import Login from "./components/Login";
//import Signup from "./components/Signup";
//import Welcome from "./components/Welcome";
import Adventure from "./components/Adventure";
import AdventureMatch from "./components/AdventureMatch";

function App() {
	return (
		<>
			<div>
				<Adventure />
			</div>
		</>
	);
}

export default App;