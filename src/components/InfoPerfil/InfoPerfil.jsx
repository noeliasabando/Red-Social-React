import React, {Component} from "react";
import "./InfoPerfil.css";
import UserImg from "../../img/usuaria2.png"

class InfoPerfil extends Component{
  render(){
    var user= JSON.parse(localStorage.getItem("user"));
    return(
      <div className="contenedorPerfil">
        <div className="col-12 text-center">
          <img className="userImg" src= {UserImg} alt="UserImg"/>
        </div>
        <div className="col-12 text-center datosUser">
          <p className="datosNombre">{user.displayName}</p>
          <p className="datosMail">{user.email}</p>
        </div>
      </div>
    )
  }
}

export default InfoPerfil;