import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";
import Publicacion from "../Publicacion/Publicacion";
import Comentarios from "../Publicacion/Comentarios"

import "./Inicio.css";

class Inicio extends Component {
  render() {
    return (
      <div >
        <Navbar/>
        <Logo />
        <Publicacion/> 
        <Comentarios/>
      </div>
    )
  }
}

export default (Inicio);
