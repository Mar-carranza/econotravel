import {TableFooter} from "@mui/material";
import { Box } from "@mui/material";
import React from "react";

function Footer() {
  return ( 
  
  <TableFooter style ={{width:"100%",display:"block"}}>
    <Box className="main-footer" style ={{color:"#710000", backgroundColor:"#B1CC74",padding:"1em 0 1em 0",display:"flex"}}>
         

          <Box className ="col">
            <h4 style={{padding:"0.5em 0 0.5em 0"}}>¿Medios de Pago? </h4>
            <button style={{color:"white",backgroundColor:"#136f63", borderColor:"#B1CC74"}}>ver mas</button>
          </Box>

          <Box className="col" >
          <h4 style={{padding:"0.5em 0 0.5em 0"}}>¿Quienes Somos? </h4>
          <button style={{color:"white",backgroundColor:"#136f63", borderColor:"#B1CC74"}}>ver mas</button>
          </Box>
          
        <Box className ="col">
        <h4 style={{padding:"0.5em 0 0.5em 0"}}>¿Como Funciona? </h4>
        <button style={{color:"white",backgroundColor:"#136f63", borderColor:"#B1CC74"}}>ver mas</button>
        </Box>

        
    </Box>
   </TableFooter>)
   ;
  };


export default Footer;
