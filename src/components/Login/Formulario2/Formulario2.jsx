import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import '../../Login/Logo3/Logo3';
import Auth from "../../../Firebase/auth";



class Formulario2 extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
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

	login = () => {
		const { email, password } = this.state
		Auth.login(email, password)
			.then((res) => {
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
			<section>
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-12 text-center">
							<div id="msnUsuario">
								<p></p>
							</div>
							<div id="login">
								<div>
									<input id="email"
										className="inputInicioSesion"
										type="email"
										value={this.state.email}
										onChange={this.handleInputChange}
										placeholder="Correo electrónico" />
								</div>
								<div>
									<input id="password"
										className="inputInicioSesion"
										type="password"
										value={this.state.password}
										onChange={this.handleInputChange}
										placeholder="Contraseña" />
								</div>
								<div>
									<p>Olvidé mi contraseña</p>
								</div>
								<div>

									<input id="loginButton" className="inputInicioSesion" onClick={this.login} type="button" value="Iniciar sesión" />
								</div>
								<div className="ingresarConCuenta">¿No tienes una cuenta?
                  <Link className="nav-link registrate" to="/" > Registrate</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		)
	}
}

export default withRouter(Formulario2); 