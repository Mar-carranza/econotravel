import React from "react";
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import Detalle from "./components/Detalle";
import Reserva from "./components/Reserva";
import DetalleReserva from "./components/DetalleReserva";



function App() {
  
    return(
      <div className = "App" >
       <Navbar/>
       <Home/>
       <Detalle />
       <Reserva />
      <DetalleReserva /> 


       </div>
    )
  }







export default App;
