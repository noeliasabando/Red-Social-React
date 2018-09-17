import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo"
import InputSearch from "../InputSearch/InputSearch"
import AgregarAmigos from "../AgregarAmigos/AgregarAmigos"

import "./Amigos.css";

class Amigos extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Logo />
        <InputSearch />
        <AgregarAmigos />
        <AgregarAmigos />
        <AgregarAmigos />
      </div>
    )
  }
}

export default (Amigos);