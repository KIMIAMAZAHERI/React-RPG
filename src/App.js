//TODOS
//1. Make sure components are working
//2. Set up Github
//3. Set up routing

import {Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";
import Adventure from "./components/Adventure";

function App() {
	return (
		<>
			<div>Test</div>
			<Login />
			<Signup />
			<Welcome />
			<Adventure />
		</>
	);
}

export default App;
