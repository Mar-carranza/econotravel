import React from "react";
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import DetalleReserva from "./components/DetalleReserva";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Router } from "react-router-dom";



function App() {
  
     return(
      <div className = "App" >
        <BrowserRouter>
          <Navbar/>
         
          <Home/>
          <DetalleReserva /> 
          <Login/>
          <Register/>
          
        </BrowserRouter> 
       
       </div>
    )
  }










export default App;
