import React, { useState } from "react";
import { Box, display, padding } from "@mui/system";
import Navbar from "./Navbar";
import bicicleta from './imagenes/monseny.jpg';
import { Typography } from "@mui/material";


const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 200) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

function DetalleReserva (){
    return(
        <Box style={{height: '100vh'}}>
            <Navbar />
          <Box style={{padding:'4%' }}>  
            <p style={{fontSize:'0.7rem', display:'flex', paddingTop:'4rem' }}> Home  Montaña  Bicicleta </p>
            <Typography variant='h4' component="h2" style={{padding:'3%', display:'flex', alignItems:'start'}}>Paseo en bicicleta por el Montseny</Typography>
          <Box style={{display:'flex'}}>  
              <img src={bicicleta} alt="imagen de bicicleta"/>
              <Box style={{width:'35%'}}>
              <ReadMore>
                  Disfruta de un hermoso paseo en bicicleta por el increíble Parque Natural del Montseny. Una escapada veraniega perfecta para parejas, familias y amigos que nos permitirá conocer nuevos y sorprendentes lugares. El recorrido que os proponemos comienza con una larga subida con algunos descansos, combinando asfalto y pistas anchas, culminando en un mirador con magníficas vistas del Vallés y el mar. Desde aquí continuaremos la bajada combinando senderos, pistas y algún tramo de carretera y terreno mixto para visitar la zona de Santa Fe, donde descubriremos la Ermita y el Bosque de las Secuoyas. Para finalizar, acudiremos al restaurante María Rosa de Palautordera, donde disfrutaremos de una excelente comida casera con butifarra blanca y negra y munxetes del Montseny.
              </ReadMore>
            
              </Box>
              </Box>
              
          </Box>  
        </Box>

    )
}

export default DetalleReserva;