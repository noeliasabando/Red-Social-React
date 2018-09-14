import React from 'react';
import './Logo2.css';
//import logo from '../../img/isologotipoBlanco.png' 

const logo = (props) => {
    return (
        <div className="topBox">
        <img src = {props.foto} className= 'logoBlanco' />
        </div>
    )
}

export default logo2;

