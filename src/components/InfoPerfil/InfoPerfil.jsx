import React, {Component} from 'react';
import './InfoPerfil.css';
import UserImg from "../../img/usuaria2.png"


class InfoPerfil extends Component{
  render(){
    return(
      <div className="contenedorPerfil">
        <div className="col-12 text-center">
          <img className="userImg" src= {UserImg} alt="UserImg"/>
        </div>
        <div className="col-11 text-center datosUser">
          <p className="datosNombre">Aquí va nombre</p>
          <p className="datosMail">Aquí va mail</p>
        </div>
      </div>
    )
  }
}

export default InfoPerfil;