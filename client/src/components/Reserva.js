import React from "react";
import Logo from '../assets/Logo.png';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";



function Reserva (){
    

    return ( 
    <Box class name= "contenedor" style= {{}}>
        
        <Box style={{height:'100vh', justifyContent: "center", display:"flex"}}>
            <img className="logo" style={{ height: "6em" }} src={Logo} alt="Logo"/>    
            <h2>Formulario de Reserva</h2>
        </Box>

        <Box class name= "contenedor" style= {{display:"flex"}}>
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
        <Box>
            <p style= {{color: "#ff0000"}}>250€</p>
            <p style= {{fontWeigth: "bold"}}> Experiencia reservada: Paseo en bicicleta por el Montseny. Qty: 1 </p>
            <Button style= {{backgroundColor:"#B1CC74"}}>Pagar</Button>
            <p> Garantías de Econotravel:</p>
            <h6>99% de clientes satisfechos</h6>
            <h6>Colaboradores de calidad</h6>
            <h6>Pago 100% seguro</h6>

        </Box>
        </Box>
        </Box>
         
     )         
  
    
    }      


export default Reserva;

