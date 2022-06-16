import React from "react";
import Logo from '../assets/Logo.png';
import Box from "@mui/material/Box";
//import DataPicker from 'react-DataPicker';
//import 'react-DataPicker/dist/react-datapicker.css';

function Reserva (){
    return (
        <Box>
        <Box style={{height:'100vh'}}>
            <img className="logo" style={{ height: "6em" }} src={Logo} alt="Logo"/>    
            <h2>Formulario de Reserva</h2>
        </Box>
        <Box className="form" style={{}}>
         
          <p>Nombre:</p>
            <input className="input"></input>
            <p>Apellidos:</p>
            <input className="input"></input>
            <p>Dirección:</p>
            <input className="input"></input>
            <p>Nombre:</p>
            <input className="input"></input>
            <p>Apellidos:</p>
            <input className="input"></input>
        </Box>
        </Box>
         
     )         
  
    
    }      


export default Reserva;

