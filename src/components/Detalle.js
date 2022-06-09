
import React from "react";
import Navbar from "./Navbar.js";
import bicicleta from './imagenes/monseny.jpg';
import Box from '@mui/material/Box'


function Detalle (){
    return (
        <Box style={{height: '100vh'
        }}>
        <Navbar/>
        <h3>Home-Montaña-Bicicleta</h3>
        <h2>Paseo en bicicleta por el Montseny</h2>
        <img src={bicicleta} alt="imagen de bicicleta"/>
         
        
        
        <a href= "#Detalle"> <button>Reservar</button></a>
        
    </Box>
    )}

export default Detalle;
