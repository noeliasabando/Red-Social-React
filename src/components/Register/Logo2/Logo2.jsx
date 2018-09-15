import React, {Component} from 'react';
import './Logo2.css';
import ruta from "../../../img/LogoBlanco2.png";


class Logo2 extends Component{
  render(){
    return(
      <div className="topBox">
        <img id="logo2" src= {ruta} alt="LogoBlanco"/>
      </div>
    )
  }
}

export default Logo2;
