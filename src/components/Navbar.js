import { AppBar } from "@mui/material";
import React from "react";
import Logo from './imagenes/Logo.png'

function Navbar (){
    return (
        <div className ="nav">
        <nav className ="navbar">
        <div><img className="logo" src={Logo} alt="Logo" /> </div>
        <div ><img className ="lupa"src={lupa} alt ="lupa"/></div>
        <div ><img className ="viajeros"src={viajeros} alt ="viajeros"/></div>
        <div ><img className ="maleta"src={maleta} alt ="viajeros"/></div>
 
        </nav>
        </div>

)
}
export default navbar


