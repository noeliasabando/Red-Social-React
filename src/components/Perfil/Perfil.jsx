import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo"

import "./Perfil.css";
import InfoPerfil from "../InfoPerfil/InfoPerfil";
import PublicacionPerfil from "../PublicacionPerfil/PublicacionPerfil";

class Perfil extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <Logo />
        <InfoPerfil />
        <PublicacionPerfil />
      </div>
    )
  }
}

export default (Perfil);