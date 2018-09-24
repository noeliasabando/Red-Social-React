import React, {Component} from 'react';
import './PublicacionPerfil.css';
/* import publicacionImg from "../../img/usuaria2.png" */


class PublicacionPerfil extends Component{
  render(){
    var user= JSON.parse(localStorage.getItem("user"));
    return(
      <div className="contenedorPublicacion col-4 offset-4">
        <div className="col-12 text-center">
          <p className="userName">{user.displayName}</p> 
        </div> 
        <div className="">
          <p className="publicacion">{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default PublicacionPerfil;