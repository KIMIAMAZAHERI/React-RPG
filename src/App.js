//TODOS
//1. Make sure components are working
//2. Set up Github
//3. Set up routing
import React from 'react'
import ReactDOM from 'react-dom'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Header from './components/Header';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";
import Adventure from "./components/Adventure";

function App() {
	return (
	
		<div>
		<Header />
  
		<main>
		  <Login />
		  <Signup />
		  <Welcome />
		  <Adventure />
		</main>
  
		
	  </div>
	);
}

export default App;
