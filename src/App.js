import React from "react";
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import Detalle from "./components/Detalle";
import Reserva from "./components/Reserva";
import Login from "./components/Login";
import Register from "./components/Register";



function App() {
  
    return(
      <div className = "App" >
       <Navbar/>
       <Home/>
       <Register />
       <Login/>
       <Detalle />
       <Reserva />
      



       </div>
    )
  }







export default App;
