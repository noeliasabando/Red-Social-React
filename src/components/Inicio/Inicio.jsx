import React, { Component } from "react";
import { Redirect, withRouter} from "react-router-dom"
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";
import Publicacion from "../Publicacion/Publicacion";
import Comentarios from "../Publicacion/Comentarios"
import Auth from "../../Firebase/auth";

import "./Inicio.css";

class Inicio extends Component {
  render() {
    if (Auth.currentUser === null) {
      return <Redirect to='/login' />
    }

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

export default withRouter(Inicio);
