import React, { Component } from 'react';
import fire from '../confi/Fire';

class Home extends Component{
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }
    cerrarSesion(){
        fire.auth().signOut();
    }
    render(){
        return(
            <div>
            <h1> Bienvenido a Inicio </h1>
            <button onClick = {this.logout}> Cerrar Sesion </button>
            </div>
        );
    }
}
export default Home;