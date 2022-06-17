import React from "react";
import maletaBack from "../assets/maletaBack.jpg";
import luzmontaña from "../assets/luzmontaña.jpg";
import playa from "../assets/playa.jpg";
import callebarcelona from "../assets/callebarcelona.jpg";
import embarcacion from "../assets/embarcacion.jpg";
import nubes from "../assets/nubes.png";



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
          style={{ position: "absolute", top: "70%", left: "47%",backgroundColor: "#B1CC74",borderColor: "#B1CC74",color:"white" }}
        >
          Descubre Mas
        </button>
      </Box>
      <Box className="item-1">
        <h1>Experiencia en Barcelona </h1>
      </Box>
      <Box style={{ display: "inline-flex", gap: "5em" }}>
        <div>Ubicacion</div> <div>Transporte</div> <div>Duracion</div>
      </Box>
 
      <Box
        className="imagen1"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Box>
          <Box>
            <img className="" src={luzmontaña} alt="" style={{}} />
            <Box>
              <button
                className="Chip One"
                style={{
                  borderRadius: "2rem",
                  borderColor: "#B1CC74",
                  color: "#B1CC74",
                }}
              >
                Chip One
              </button>
              <button
                className="Chip One"
                style={{
                  borderRadius: "2rem",
                  borderColor: "#B1CC74",
                  color: "#B1CC74",
                }}
              >
                Chip One
              </button>
              <button
                className="Chip One"
                style={{
                  borderRadius: "2rem",
                  borderColor: "#B1CC74",
                  color: "#B1CC74",
                }}
              >
                Chip One
              </button>
            </Box>
          </Box>
          <Box className="padreTexto" style={{}}>
            <h3 className="Montaña">Montaña</h3>
            <h6 className="Persona">250€ por persona </h6>
            <a href="">Reserva ahora</a>
          </Box>
        </Box>

        <Box>
          <Box>
            <img className="" src={playa} alt="playa" style={{}} />
            <Box>
              <button
                className="Chip One"
                style={{
                  borderRadius: "2rem",
                  borderColor: "#B1CC74",
                  color: "#B1CC74",
                }}
              >
                Chip One
              </button>
              <button
                className="Chip One"
                style={{
                  borderRadius: "2rem",
                  borderColor: "#B1CC74",
                  color: "#B1CC74",
                }}
              >
                Chip One
              </button>
              <button
                className="Chip One"
                style={{
                  borderRadius: "2rem",
                  borderColor: "#B1CC74",
                  color: "#B1CC74",
                }}
              >
                Chip One
              </button>
            </Box>
          </Box>
          <Box className="padreTexto2" style={{}}>
            <h3 className="Playa">Playa</h3>
            <h6 className="Persona">250€ por persona </h6>
            <a href="">Reserva ahora</a>
          </Box>
        </Box>

        <Box>
          <img
            className=""
            src={callebarcelona}
            alt="callebarcelona"
            style={{}}
          />
          <Box>
            <button
              className="Chip One"
              style={{
                borderRadius: "2rem",
                borderColor: "#B1CC74",
                color: "#B1CC74",
              }}
            >
              Chip One
            </button>
            <button
              className="Chip One"
              style={{
                borderRadius: "2rem",
                borderColor: "#B1CC74",
                color: "#B1CC74",
              }}
            >
              Chip One
            </button>
            <button
              className="Chip One"
              style={{
                borderRadius: "2rem",
                borderColor: "#B1CC74",
                color: "#B1CC74",
              }}
            >
              Chip One
            </button>
          </Box>
          <Box className="padreTexto3" style={{}}>
            <h3 className="Cuidad">Cuidad</h3>
            <h6 className="Persona">250€ por persona </h6>
            <a href="">Reserva ahora</a>
          </Box>
        </Box>
      </Box>

      <Box className ="travel" style ={{display :"flex"}}>
      <Box>
       <img className=""
            src={embarcacion}
            alt="embarcacion"
            style={{}} />
      </Box>
      <Box style = {{}}><h1>Travel any corner of the world whit us</h1>
      <h3> texto</h3>
      <button className="Chip One"
              style={{
                borderRadius: "2rem",
                 backgroundColor: "#B1CC74",
                 color:"white"
              }}
            >contactanos</button> </Box>
      </Box>

      <Box className= "Descuento" style={{ position: "relative"}} >
      <Box className= "Descuento" style={{ position: "relative"}} > <img
          className="nubes"
          src={nubes}
          alt="nubes"
          style={{}}
        />
        <h3 style={{ position: "absolute", top: "20%", left: "25%" }}>
          No te lo pierdas registrate hoy,y recibe un 25% de descuento en tu proxima experiencia 
        </h3>
        <button 
          className="registrate"
          style={{ position: "absolute", top: "70%", left: "47%", backgroundColor: "#B1CC74",borderColor: "#B1CC74",color:"white" }}
        >
          Registrate hoy
        </button>
        </Box>
      </Box>


    </Box>
  );
};
export default Home;
