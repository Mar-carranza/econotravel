import React from "react";
import maletaBack from "./imagenes/maletaBack.jpeg";
import luzmontaña from "./imagenes/luzmontaña.jpg";
import playa from "./imagenes/playa.jpg";
import callebarcelona from "./imagenes/callebarcelona.jpg";

import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box id="Home-P" style={{}}>
      <Box className="item" style={{ position: "relative" }}>
        {" "}
        <img
          className="maletaBack"
          src={maletaBack}
          alt="maletaBack"
          style={{}}
        />
        <button
          className="buttonDescubre"
          style={{ position: "absolute", top: "70%", left: "47%" }}
        >
          Descubre Mas
        </button>
      </Box>
      <Box className="item-1">
        <h1>Experiencia en Barcelona </h1>
      </Box>
      <Box style={{ display: "inline-flex", gap: "5em" }}>
        <div>Ubicacion</div> <div>Transporte</div> <div>Duracion</div></Box>
        
        <Box className="imagen1" style={{display:"flex",flexDirection: "row" }}>
    
        <Box>
          <img
          className=""
          src={luzmontaña}
          alt=""
          style={{}} 
        /><Box ><button className ="Chip One" style ={{borderRadius:"2rem",borderColor:"#B1CC74",color:"#B1CC74"}}>Chip One</button>
        <button className ="Chip One" style ={{borderRadius:"2rem",borderColor:"#B1CC74",color:"#B1CC74"}}>Chip One</button>
        <button className ="Chip One" style ={{borderRadius:"2rem",borderColor:"#B1CC74",color:"#B1CC74"}}>Chip One</button></Box></Box>

         <Box><img
        className=""
        src={playa}
        alt="playa"
        style={{}}
      /><Box><button className ="Chip One" style ={{borderRadius:"2rem",borderColor:"#B1CC74",color:"#B1CC74"}}>Chip One</button>
      <button className ="Chip One" style ={{borderRadius:"2rem",borderColor:"#B1CC74",color:"#B1CC74"}}>Chip One</button>
      <button className ="Chip One" style ={{borderRadius:"2rem",borderColor:"#B1CC74",color:"#B1CC74"}}>Chip One</button></Box></Box>

      <Box><img
        className=""
        src={callebarcelona}
        alt="callebarcelona"
        style={{}}
      /><Box><button className ="Chip One" style ={{borderRadius:"2rem",borderColor:"#B1CC74",color:"#B1CC74"}}>Chip One</button>
      <button className ="Chip One" style ={{borderRadius:"2rem",borderColor:"#B1CC74",color:"#B1CC74"}}>Chip One</button>
      <button className ="Chip One" style ={{borderRadius:"2rem",borderColor:"#B1CC74",color:"#B1CC74"}}>Chip One</button></Box></Box>

</Box>





</Box>
    
  );
};
export default Home;
