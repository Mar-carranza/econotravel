import React from "react";
import { Grid } from "@mui/material";
import logogrande from '../assets/logogrande.png';
import { Link } from 'react-router-dom';

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
            Haz click <Link to="/register">aquí</Link>, si todavía no te has registrado
            </h1>
           </div> 
          
        </Grid>
      </div>
    );
  }
  
  export default Login;