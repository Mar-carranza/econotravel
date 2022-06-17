import React from "react";
import Logogrande from '../assets/logogrande.png';
import { Box } from "@mui/system";
import {Typography} from "@mui/material";

function Informacion (){
    return (
        <Box style={{marginBottom: '2rem'}}>
            <img className="Logogrande"  style={{ height: "20em" }} src={Logogrande} alt="Logogrande"/>
             <Typography variant='h4' component= 'h2' style= {{marginBottom: '2rem'}}>Econotravel: Experiencias en el área de Barcelona</Typography>
             <h3>- Quiénes somos -</h3>
            <br/>
             <Box>
             <Typography style= {{marginBottom: '2rem', fontWeigth: "bold"}}>Misión</Typography>
             <p style= {{fontSize: "1rem"}}>Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora, Marina Herrán, realizó en bicicleta por Cataluña en el verano de 2001. Durante ese periodo, descubrió que las opciones turísticas que ofrecían ciudades como Barcelona, Girona y Reus dependían de transportes contaminantes y actividades poco respetuosas con la naturaleza y el entorno, algo que causaba un progresivo deterioro de los increíbles parajes naturales de Cataluña.
             Preocupada por la falta de alternativas eco-friendly, Marina se propuso fundar una agencia de experiencias turísticas donde el respeto por la naturaleza fuera la principal prioridad. Así nació Econotravel Barcelona.
            </p><br/>
            </Box>
            <Box>
            <br/><h3 style= {{textDecoration: "underline"}}>Contacto</h3>
            <h4>Teléfono: 93 123 45 67</h4>
            <h4>Correo: info@econotravel.com</h4>
            <h4>Dirección: Carrer dels Viatgers, 28, 08001 Barcelona</h4>
            </Box><br/>
            

        </Box>     
    )}

export default Informacion