import react from "react";
import { Grid } from "@mui/material";
import Logo from './imagenes/Logo.png';

function Register() {
    return (
      <div className="Login">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <div className="grid-block">
            <h1 className="text-click">
              Haz click aquí, si ya te has registrado.
            </h1>
          </div>
          <div className="form">
            <p>Username:</p>
            <input className="input"></input>
            <p>Password:</p>
            <input className="input"></input>
            <p>Repeat Password </p>
            <div>
                
              <button className="button-form">Login</button>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
  
  export default Register;