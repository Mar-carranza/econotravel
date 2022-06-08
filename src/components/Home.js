import React from "react";
import Grid from "@mui/material/Grid";
import maletaBack from "../imagenes/maletaBack.jpeg";

const Home = () => {
  return (
    <div id="Home-P" style={{}}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <div className="item">
          {" "}
          <img
            className="maletaBack"
            src={maletaBack}
            alt="maletaBack"
            style={{}}
          />{" "}
        </div>
        <button className="buttonDescubre">Descubre Mas</button>
        <div className="item-1">
          <h1>Experiencias en Barcelona</h1>
          <p>ubicacion</p> <p>Transporte</p> <p>Duracion</p>
        </div>
      </Grid>
    </div>
  );
};
export default Home;
