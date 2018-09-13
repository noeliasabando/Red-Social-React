import React, {Component} from 'react';
import './Logo.css';
import logoImg from "../../img/LogoGris.png"


class Logo extends Component{
  render(){
    return(
      <div>
        <img id="logo" src= {logoImg} alt="Logo"/>
      </div>
    )
  }
}

export default Logo;