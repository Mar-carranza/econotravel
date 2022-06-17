import { Card, CardHeader, CardMedia, CardContent } from "@mui/material";


function Experience ({title, description, img}){
    return (
        <div>
            <Card>
                <CardHeader>
                title={title}
                </CardHeader>
                <CardMedia
                image={img}/>
                <CardContent>
                <Typography variant="body2" color="text.secondary">{description}</Typography>
                </CardContent>
            </Card>
            
            
        </div>
    )
    }
export default Experience;

/*
import React from "react";
import { Button, Container, Chip } from "@mui/material";
import { Grid, Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";


function Experience(){



const [data, setData] = useState([]);
useEffect(() => {
  axios.get("http://localhost:3000/experience").then((response) => {
    console.log(response);
    setData(response.data);
  });
}, []);
return (
  <Grid container style={{ backgroundColor: "#FBF1E3" }}>
    {" "}
    {data.map((data) => (
      <Container style={{ marginTop: "6em" }}>
        {" "}
        <img src={data.img} width="249" alt="bike"></img>{" "}
        <Box style={{ marginTop: "0.5em" }}>
          {" "}
          <Chip
            label={data.tag1}
            variant="outlined"
            style={{ width: "80px", height: "25px" }}
          />{" "}
          <Chip
            label={data.tag2}
            variant="outlined"
            style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
          />{" "}
          <Chip
            label={data.tag3}
            variant="outlined"
            style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
          />{" "}
          <h1 style={{ fontSize: "1.2em", color: "#2E5137", marginTop: "1em" }}>
            {" "}
            {data.tag1}{" "}
          </h1>{" "}
          <h2 style={{ fontSize: "1em", fontWeight: "200", color: "#2E5137" }}>
            {" "}
            {data.price}€/persona{" "}
          </h2>{" "}
        </Box>{" "}
        <Button
          style={{
            backgroundColor: "#2E5137",
            borderRadius: "50px",
            color: "white",
            marginLeft: "10em",
            marginTop: "-5em",
            textTransform: "none",
          }}
          size="small"
        >
          {" "}
          Reserva ahora{" "}
        </Button>{" "}
      </Container>
    ))}{" "}
  </Grid>
);
}

export default Experience;
*/