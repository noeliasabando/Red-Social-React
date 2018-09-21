import React, { Component } from "react";
import './Formulario.css';
import { Link, Redirect } from "react-router-dom";
import Auth from "../../../Firebase/auth";

class Formulario extends Component {
constructor(){
    super();
    this.login = this.login.bind (this);
    this.handleChange = this.handleChange.bind (this);
    this.signup = this.signup.bind (this);
    this.state = {
        name: '',
        email : '',
        contraseña : ''
    };
    }

	handleInputChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.id;

        }).then((u)=>{console.log(u)})
        .catch((error)=>{
            console.log(error + "holi soy otro hermoso error");
        })
    }
    render(){
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
                                  
                                    <input class="botonFacebook" id="facebookButton" onclick="facebookLoginWithFirebase()" type="button" value="Iniciar sesión con Facebook"/>
                                </div>
                                <hr class="style1"/>
                                <div>
                                    <input class="inputRegistro" id="name" type="text" placeholder="Nombre usuario" ref= {(input) => this.nameInput = input}/>
                                </div>
                                <div>
                                    <input value={this.state.email} onChange= {this.handleChange} class="inputRegistro" id="email" type="email" placeholder="Correo electrónico"/>
                                </div>
                                <div>
                                    <input value={this.state.contraseña} onChange={this.handleChange} 
                                    class="inputRegistro" id="password" type="password" placeholder="Contraseña"/>
                                </div>
                                <div>
                                    <button onClick = {this.signup} className= "botonRegistro" id= "registerButton"></button>
                                </div>
                            </form>
                            <p class="ingresarConCuenta">¿Tienes una cuenta?
                            <Link />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    
        </section>

	render() {
		if (this.state.loggedUser !== null) {
			return <Redirect to="/home" />
		}
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
										<input className="botonFacebook" id="facebookButton" type="button" value="Iniciar sesión con Facebook" />
									</div>
									<hr className="style1" />
									<div>
										<input className="inputRegistro"
											id="name"
											type="text"
											value={this.state.name}
											onChange={this.handleInputChange}
											placeholder="Nombre usuario" />
									</div>
									<div>
										<input className="inputRegistro"
											id="email"
											type="email"
											value={this.state.email}
											onChange={this.handleInputChange}
											placeholder="Correo electrónico" />
									</div>
									<div>
										<input className="inputRegistro"
											id="password"
											type="password"
											value={this.state.password}
											onChange={this.handleInputChange}
											placeholder="Contraseña" />
									</div>
									<div>
										<input className="botonRegistro"
											id="registerButton"
											onClick={this.registerWithFirebase}
											type="button"
											value="Registrarse" />
									</div>
								</form>
								<p className="ingresarConCuenta">¿Tienes una cuenta?
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

export default Formulario; 