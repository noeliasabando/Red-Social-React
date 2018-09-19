import React, { Component } from "react";
import './Formulario.css';
import Link from '../Link/Link';
import fire from '../confi/Fire';

class Formulario extends Component {
constructor(props){
    super(props);
    this.login = this.login.bind (this);
    this.handleChange = this.handleChange.bind (this);
    //this.signup = this.signup.bind (this);
    this.state = {
        name: '',
        email : '',
        contraseña : ''
    };
    }

    handleChange (e){
        this.setState ({[e.target.name]: e.target.value});
    }
    login(e){
        e.preventDefault ();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.contraseña).then((u)=> {
        }).catch((error)=>{
            console.log(error + "holi soy un hermoso error");
        });
    }
    registro(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.contraseña, this.state.name).then((u)=>{

        }).then((u)=>{console.log(u)})
        .catch((error)=>{
            console.log(error + "holi soy otro hermoso error");
        })
    }
    render(){
        return (
            <section className="imagenFondo">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 text-center">
                        <div id="registro">
                            <div id="msnUsuario">
                            </div>
                            <form className="formulario">
                                <div>
                                  
                                    <input class="botonFacebook" id="facebookButton" onclick="facebookLoginWithFirebase()" type="button" value="Iniciar sesión con Facebook"/>
                                </div>
                                <hr class="style1"/>
                                <div>
                                    <input value={this.state.name} onChange={this.handleChange} className="inputRegistro" id="name" type="text" placeholder="Nombre usuario" />
                                </div>
                                <div>
                                    <input value={this.state.email} onChange= {this.handleChange} className="inputRegistro" id="email" type="email" placeholder="Correo electrónico" />
                                </div>
                                <div>
                                    <input value={this.state.contraseña} onChange={this.handleChange} 
                                    className="inputRegistro" id="password" type="password" placeholder="Contraseña" />
                                </div>
                                <div>
                                    <button onClick = {this.signup} className= "botonRegistro" id= "registerButton"></button>
                                </div>
                            </form>
                            <p className="ingresarConCuenta">¿Tienes una cuenta?
                            <Link />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    
        </section>

)}
}


export default Formulario ; 