import React, { Component } from "react";
import './Formulario.css';
import {Link, Redirect} from "react-router-dom";
import Auth from '../../../Firebase/auth'

class Formulario extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            pasword: "",
            loggedUser: null,
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.id;
    
        this.setState({
            [name]: value
        });
    }

    registerWithFirebase = () => {
        let { name, email, password } = this.state;
        let user = Auth.createUser(name, email, password)

        this.setState({
            loggedUser: user
        })
    }

    render(){
        if (this.state.loggedUser !== null) {
            return <Redirect to='/home' />
        }
        return (
            <section class="imagenFondo">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12 text-center">
                        <div id="registro">
                            <div id="msnUsuario">
                            </div>
                            <form class="formulario">
                                <div>
                                    <input class="botonFacebook" id="facebookButton" type="button" value="Iniciar sesión con Facebook"/>
                                </div>
                                <hr class="style1"/>
                                <div>
                                    <input class="inputRegistro" 
                                        id="name" 
                                        type="text" 
                                        value={this.state.name} 
                                        onChange={this.handleInputChange} 
                                        placeholder="Nombre usuario"/>
                                </div>
                                <div>
                                    <input class="inputRegistro" 
                                        id="email" 
                                        type="email" 
                                        value={this.state.email} 
                                        onChange={this.handleInputChange} 
                                        placeholder="Correo electrónico"/>
                                </div>
                                <div>   
                                    <input class="inputRegistro" 
                                        id="password" 
                                        type="password" 
                                        value={this.state.password} 
                                        onChange={this.handleInputChange} 
                                        placeholder="Contraseña"/>
                                </div>
                                <div>
                                    <input class="botonRegistro" 
                                        id="registerButton" 
                                        onClick={this.registerWithFirebase} 
                                        type="button" 
                                        value="Registrarse"/>
                                </div>
                            </form>
                            <p class="ingresarConCuenta">¿Tienes una cuenta?
                            <Link className="nav-link entrar" to="/login" >Entrar</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        )
    }
}

export default Formulario ; 