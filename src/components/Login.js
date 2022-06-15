import react from "react";
import { Grid } from "@mui/material";
import logogrande from './imagenes/logogrande.png';

function Login() {
    return (
      <div className="Login" style={{height:"100vh"}}>
        
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <div className="grid-block">
          <img
            className="logogrande"
            style={{ height: "15em" }}
            src={logogrande}
            alt="logogrande"
          />   
          </div>
          <div className="form" style={{}}>
            <p>Username:</p>
            <input className="input"></input>
            <p>Password:</p>
            <input className="input"></input>
            <div>
              <button className="button-form">Login</button>
            </div>
            <h1 className="text-click">
              Haz click aquí, si ya te has registrado
            </h1>
          
          </div>
        </Grid>
      </div>
    );
  }
  
  export default Login;