import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo"
import InfoPerfil from "../InfoPerfil/InfoPerfil";
import PublicacionPerfil from "../PublicacionPerfil/PublicacionPerfil";

import "./Perfil.css";

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