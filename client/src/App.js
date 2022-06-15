import React from "react";
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import DetalleReserva from "./components/DetalleReserva";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Router } from "react-router-dom";
import Informacion from './components/Informacion'; 



function App() {
  
     return(
      <div className = "App" >
        <BrowserRouter>
          <Navbar/>
          
          <Home/>
          <DetalleReserva /> 
          <Login/>
          <Register/>
          <Informacion />
        </BrowserRouter> 
       
       </div>
    )
  }










export default App;
