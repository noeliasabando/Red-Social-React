import React, { Component } from "react";
import './Formulario.css';
import { Link, Redirect } from "react-router-dom";
import Auth from "../../../Firebase/auth";

class Formulario extends Component {
	constructor() {
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
		Auth.createUser(name, email, password)
			.then(() => {
				this.setState({
					loggedUser: Auth.currentUser
				})
			})
	}

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