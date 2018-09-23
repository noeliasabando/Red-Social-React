import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo"
import InfoPerfil from "../InfoPerfil/InfoPerfil";
import PublicacionesPerfil from "../PublicacionesPerfil/PublicacionesPerfil";

import "./Perfil.css";

class Perfil extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <Logo />
        <InfoPerfil />
        <PublicacionesPerfil />
      </div>
    )
  }
}

export default (Perfil);