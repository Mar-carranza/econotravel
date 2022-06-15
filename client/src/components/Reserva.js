import React from "react";
import Logo from '../assets/Logo.png';
import Box from "@mui/material/Box";
//import DataPicker from 'react-DataPicker';
//import 'react-DataPicker/dist/react-datapicker.css';

function Reserva (){
    return (
        <Box style={{height:'100vh'}}>
        <img className="logo" style={{ height: "6em" }} src={Logo} alt="Logo"/>    
        <h2>Formulario de Reserva</h2>
        <a href= "#Modos de pago"><button>Pagar</button></a>
        <h3>Start Date</h3>


    </Box>
    )}

export default Reserva;


