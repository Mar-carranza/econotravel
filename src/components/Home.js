import React from "react";
import maletaBack from "./imagenes/maletaBack.jpeg";
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
      <Box style={{ display: "inline-flex", gap: "10em" }}>
        <div>Ubicación</div> <div>Transporte</div> <div>Duración</div>
      </Box>
    </Box>
  );
};
export default Home;
