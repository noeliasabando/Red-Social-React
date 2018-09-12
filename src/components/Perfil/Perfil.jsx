import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo"

import "./Perfil.css";

class Perfil extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <Logo />
      </div>
    )
  }
}

export default (Perfil);