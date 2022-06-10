import React from "react";
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import Login from './components.Login';
import DetalleReserva from './components.DetalleReserva';
import Register from './components.Register';
import Detalle from "./components/Detalle";
import Reserva from "./components/Reserva";



function App() {
  
    return(
      <div className = "App" >
       <Navbar/>
       <Home/>
       <Login/>
       <Detalle />
       <Reserva />
       <DetalleReserva/>
       <Register/>



       </div>
    )
  }







export default App;
