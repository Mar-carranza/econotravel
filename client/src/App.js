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


function App() {
  
     return(
      <div className = "App" >
        <BrowserRouter>
          <Navbar/>
          
          <Home/>
          <DetalleReserva />
          <Rutas />
          <Login/>
          <Register/>
          <Informacion />
        </BrowserRouter> 
       <Footer/>
       
       </div>
    )
  }










export default App;
