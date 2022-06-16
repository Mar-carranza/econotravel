import React from "react";
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import DetalleReserva from "./components/DetalleReserva";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter } from "react-router-dom";
import Informacion from './components/Informacion'; 
import Rutas from './components/Rutas';
import Reserva from './components/Reserva';


function App() {
  
     return(
      <div className = "App" >
        <BrowserRouter>
          <Navbar/>
          
          <Home/>
          <DetalleReserva />
          <Rutas />
          <Login/>
          <Reserva />
          <Register/>
          <Informacion />
        </BrowserRouter> 
       
       </div>
    )
  }










export default App;
