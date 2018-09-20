import React, { Component } from "react";
//import { NavbarToggler} from 'reactstrap';
import { NavLink, withRouter}  from "react-router-dom";

import * as routes from '../../constantes/routes';

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
                  <NavLink className="nav-link" to={routes.PERFIL}>Ver perfil</NavLink>
                </li>
                <li className="nav-item mr-3">
                  <NavLink className="nav-link" to={routes.INICIO}>Inicio</NavLink>
                </li>
                <li className="nav-item mr-3">
                  <NavLink className="nav-link" to={routes.AMIGOS} >Amigos</NavLink>
                </li>
                <li className="nav-item mr-3">
                  <NavLink className="nav-link" to={routes.REGISTER} >Cerrar sesión</NavLink>
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








