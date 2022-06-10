import React from "react";
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import DetalleReserva from "./components/DetalleReserva";



function App() {
  
    return(
      <div className = "App" >
       <Navbar/>
       <Home/>
       <DetalleReserva /> 


       </div>
    )
  }







export default App;
