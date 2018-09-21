import React, {Component} from 'react';
import './Logo3.css';
import logo3 from "../../../img/isologotipoBlanco.png";


class Logo3 extends Component{
  render(){
    return(
      <div className="topBox3">
        <img className="logo3" id="logo3" src= {logo3} alt="LogoBlanco"/>
      </div>
    )
  }
}

export default Logo3;



