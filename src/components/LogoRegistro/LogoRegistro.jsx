import React, {Component} from 'react';
import './LogoRegistro.css';
import ruta from "../../img/isologotipoBlanco.png";


class LogoRegistro extends Component{
  render(){
    return(
      <div className="">
        <img id="logo2" src= {ruta} alt="LogoBlanco"/>
      </div>
    )
  }
}

export default LogoRegistro;




/*import React from 'react';
import '../Logo2/Logo2.css';

const LogoRegistro = (props) => {
    return (
        <div className="topBoxx">
        <img src = {props.foto} className= 'logoBlanco2' />
        </div>
    )
}

export default LogoRegistro;*/