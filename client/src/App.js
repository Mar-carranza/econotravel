import React from "react";
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import DetalleReserva from "./components/DetalleReserva";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer.js";

import { BrowserRouter } from "react-router-dom";
import Informacion from './components/Informacion'; 
import Rutas from './components/Rutas';
import Reserva from './components/Reserva';
import Experiences from "./components/Experiences";


function App() {
  
     return(
      <BrowserRouter>
        <div className = "App" >
          <Navbar/>
          <Rutas />
          <DetalleReserva />
          <Reserva />
          <Login />
          <Register />
          <Informacion />
          <Footer />  
        </div>
       </BrowserRouter> 
    )
  }










export default App;
