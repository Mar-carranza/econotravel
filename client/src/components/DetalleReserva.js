import React, { useState } from "react";
import { Box } from "@mui/system";
import Navbar from "./Navbar";
import bicicleta1 from '../assets/montseny.jpg'
import { Typography, TextField, Card, Button } from "@mui/material";
import { CardActions } from "@mui/material";
import CardContent from '@mui/material/CardContent';







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
          {isReadMore ? "...Leer mas" : " Leer menos"}
        </span>
      </p>
    );
  };

const card = (
  <React.Fragment>
    <CardContent >
      <Typography sx={{ fontSize: 30, fontWeight :'bold' }} color="#02122C" gutterBottom>
        250€
      </Typography>
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'1.5rem'}}>
      <Typography sx={{ mb: 1.5 }} color="#02122C">
        cantidad
      </Typography>
      <TextField sx={{width:'40%'}} id="standard-number" type="number" InputLabelProps={{shrink: true,}}/>
      </Box>
    </CardContent>
    <CardActions>
      <Button href='#reserva' variant='contained' sx={{color:"#02122C" }} >Reservar</Button>
      
    </CardActions>
  </React.Fragment>
);

export default function DetalleReserva() {
  return (
    <Box style={{height: '100vh', padding:'3%'}}>
      <Navbar />
      <Box style={{padding:'4%'}}> 
          <p style={{fontSize:'0.7rem', display:'flex', paddingTop:'4rem' }}> Home  Montaña  Bicicleta </p>
          <Typography variant='h4' component="h2" sx={{marginBottom:'2rem'}}>Paseo en bicicleta por el Montseny</Typography>
          <Box style={{display:'flex', justifyContent: 'space-around', gap: '4%' }} >
            <Box>
              <img src={bicicleta1} alt="imagen de bicicleta"/>
            </Box>  
            <Box>
              <ReadMore style={{}}>
              Disfruta de un hermoso paseo en bicicleta por el increíble Parque Natural del Montseny. Una escapada veraniega perfecta para parejas, familias y amigos que nos permitirá conocer nuevos y sorprendentes lugares. El recorrido que os proponemos comienza con una larga subida con algunos descansos, combinando asfalto y pistas anchas, culminando en un mirador con magníficas vistas del Vallés y el mar. Desde aquí continuaremos la bajada combinando senderos, pistas y algún tramo de carretera y terreno mixto para visitar la zona de Santa Fe, donde descubriremos la Ermita y el Bosque de las Secuoyas. Para finalizar, acudiremos al restaurante María Rosa de Palautordera, donde disfrutaremos de una excelente comida casera con butifarra blanca y negra y munxetes del Montseny.
              </ReadMore>
            </Box> 
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined" sx={{ display:'flex', flexDirection:'column' }}>{card}</Card>
            </Box>
          </Box>  
      </Box>
    </Box>
  );
}

          
