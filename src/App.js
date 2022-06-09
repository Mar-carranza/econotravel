import React from "react";
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import DetalleLoged from './components/DetalleLoged';



function App() {
  
    return(
      <div className = "App" >
       <Navbar/>
       <Home/>
       <DetalleLoged/>

       </div>
    )
  }







export default App;
