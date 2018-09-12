import React, {Component} from 'react';
import './InfoPerfil.css';
import UserImg from "../../img/usuaria2.png"


class InfoPerfil extends Component{
  render(){
    return(
      <div id="contenedorPerfil">
        <div className="col-12 text-center">
          <img id="userImg" src= {UserImg} alt="UserImg"/>
        </div>
        <div className="col-12 text-center" id="datosUser">
          <p id="datosNombre">Aquí va nombre</p>
          <p id="datosMail">Aquí va mail</p>
        </div>
      </div>
    )
  }
}

export default InfoPerfil;