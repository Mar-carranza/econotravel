import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Search from './Search';
import Reserva from './Reserva';
import Informacion from './Informacion';
import Register from './Register';
import Experiences from './Experiences';

export default function Rutas(){
    let element = useRoutes([
        {
            element: <Home />,
            path: "/"
        },
        {
            element: <Login />,
            path: "login"
        },
        {
            element: <Search />,
            path: "search"
        },
        {
            element: <Reserva />,
            path: "reserva"
        },
        {
            element: <Informacion />,
            path: "informacion"
        },
        {
            element: <Register />,
            path: "register"
            
        },
        {
            element: <Experiences />,
            path: "experiences"
            
        }
    ]);
    return element
}



