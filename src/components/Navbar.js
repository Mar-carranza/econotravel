import React from "react";
import Box from '@mui/material/Box';
import Logo from './imagenes/Logo.png';
import lupa from './imagenes/lupa.png';
import viajeros from './imagenes/viajeros.png';
import maleta from './imagenes/maleta.png';
import { TextField, IconButton } from "@mui/material";


function Navbar (){
  return (
    <Box className="nav" style={{ background:'FFEFD5'}}>
      <nav className="navbar" style={{ display:'flex', justifyContent:'space-evenly', alignItems:'center'  }}>
        
          <img
            className="logo"
            style={{ height: "6em" }}
            src={Logo}
            alt="Logo"
          />
        <Box style={{width:'60%'}}>
          <TextField type='search' placeholder="Busca una actividad, un lugar..." fullWidth/>
        </Box>
        <Box>
          <img
            className="lupa"
            style={{ height: "2em" }}
            src={lupa}
            alt="lupa"
          />
        </Box>
        <Box>
          <img
            className="viajeros"
            style={{ height: "2em" }}
            src={viajeros}
            alt="viajeros"
          />
        </Box>
        <Box>
          <img
            className="maleta"
            style={{ height: "2em" }}
            src={maleta}
            alt="maleta"
          />
        </Box>
      </nav>
    </Box>
  );
}
export default Navbar;


