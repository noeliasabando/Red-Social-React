import React, {Component} from 'react';
import './AgregarAmigos.css';
import imagen from "../../img/usuaria3.png"

class AgregarAmigos extends Component{
  render(){
    return(
      <div id="contenedorPerfilDos">
        <div className="container">
            <div className="row">
                <div className="col-2 text-right">
                    <img id="usuario" src={imagen} alt="usuario" />
                </div>
                <div className="col-6 text-left" id="datosUsuario">
                    <p id="datosNombre">Camila Carrasco</p>
                </div>
                <div className="text-left">
                    <button type="button" className="botonAdd">Agregar</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default (AgregarAmigos);