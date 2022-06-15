import React from "react";
import { Grid } from "@mui/material";
import logogrande from "./assets/logogrande.png";

function Register() {
  return (
    <div className="Login" style={{ height: "100vh" }}>
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

        <div className="grid-block">
         
          <div className="form">
            <p>Username:</p>
            <input className="input"></input>
            <p>Password:</p>
            <input className="input"></input>
            <p>Repeat Password </p>
            <input className="input"></input>
            <div>
              <button className="button-form">Login</button>
            </div>
           <h1 className="text-click">Haz click aquí, no te has registrado.</h1>
          </div>
        </div>
      </Grid>
    </div>
  );
}

export default Register;
