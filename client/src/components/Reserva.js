import React from "react";
import Logo from '../assets/Logo.png';
import Box from "@mui/material/Box";
//import { TextField } from "@material-ui/core/TextField";
//import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
//import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
//import {DatePicker} from '@mui/x-date-pickers/DatePicker';



function Reserva (){
    /*const [value, setValue] = React.useState<Date | null>(null);*/
    

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
        
            {/*<LocalizationProvider  dateAdapter={AdapterDateFns}>
           <DatePicker label="Seleccione una fecha" value={value} 
            onChange={(newValue) =>{
                setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}/>
            
        </LocalizationProvider>*/}
            
            
        
        </Box>
         
     )         
  
    
    }      


export default Reserva;

