import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo"

import "./Inicio.css";

class Inicio extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <Logo />
      </div>
    )
  }
}

export default (Inicio);
