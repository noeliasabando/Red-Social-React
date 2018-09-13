import React, {Component} from 'react';
import './PublicacionPerfil.css';
/* import publicacionImg from "../../img/usuaria2.png" */


class PublicacionPerfil extends Component{
  render(){
    return(
      <div className="contenedorPublicacion">
        <div className="col-6 text-left">
          <p className="userName">Nombre Usuario</p>
        </div>
        <div className="col-6 text-left">
          <p className="publicacion">Comparto con ustedes la receta de mi desayuno durante los fines de semana. ¡Muy rica y nutritiva! Y lo más importante, todos los productos que usé son de </p>
        </div>
      </div>
      
    )
  }
}

export default PublicacionPerfil;