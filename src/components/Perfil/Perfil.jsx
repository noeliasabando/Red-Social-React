import React, { Component } from "react";
import { NavbarToggler } from 'reactstrap';
import "./Perfil.css";

class Perfil extends Component {
  render() {
    return (
      <div >
        <header>
          <nav class="navbar navbar-expand-lg">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon">
                <i class="fas fa-bars"></i>
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-4">
                <li class="nav-item mr-3 active">
                  <a class="nav-link" href="perfil.html">Ver perfil</a>
                </li>
                <li class="nav-item mr-3">
                  <a class="nav-link" href="comentarios.html">Inicio</a>
                </li>
                <li class="nav-item mr-3">
                  <a class="nav-link" href="amigos.html">Amigos</a>
                </li>
                <li class="nav-item mr-3">
                  <a class="nav-link" onclick="logoutWithFirebase()" href="../src/login.html">Cerrar sesión</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default Perfil;








