import React from "react";
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import DetalleLoged from './components/DetalleLoged';
import Detalle from "./components/Detalle";
import Reserva from "./components/Reserva";



function App() {
  
    return(
      <div className = "App" >
       <Navbar/>
       <Home/>
       <DetalleLoged/>
       <Detalle />
       <Reserva />


       </div>
    )
  }







export default App;
