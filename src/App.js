import React from "react";
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import DetalleReserva from "./components/DetalleReserva";
import Login from "./components/Login";
import Register from "./components/Register";



function App() {
  
    return(
      <div className = "App" >
       <Navbar/>
       <Home/>
       <DetalleReserva /> 
       <Login/>
       <Register/>


       </div>
    )
  }







export default App;
