import React, { Component } from "react";
import { NavLink, withRouter}  from "react-router-dom";

import "./Navbar.css";


class Navbar extends Component {
  render() {
    return (
      <div >
        <header>
          <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
                <i className="fas fa-bars"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-4">
                <li className="nav-item mr-3">
                  <NavLink className="nav-link" to="/profile">Ver perfil</NavLink>
                </li>
                <li className="nav-item mr-3">
                  <NavLink className="nav-link" to="/">Inicio</NavLink>
                </li>
                <li className="nav-item mr-3">
                  <NavLink className="nav-link" to="/friends" >Amigos</NavLink>
                </li>
                <li className="nav-item mr-3">
                  <NavLink className="nav-link" to="/login" >Cerrar sesión</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default withRouter(Navbar);








