import React, { Component } from "react";
import './Formulario.css';
import Link from '../Link/Link';

class Formulario extends Component {
constructor(){
    super();
    this.state = {
        items :[]
    }

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
                                <input class="inputRegistro" id="email" type="email" placeholder="Correo electrónico"/>
                            </div>
                            <div>
                                <input class="inputRegistro" id="password" type="password" placeholder="Contraseña"/>
                            </div>
                            <div>
                                <input class="botonRegistro" id="registerButton" onclick="registerWithFirebase();" type="button" value="Registrarse"/>
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

    )
}
}

export default Formulario ; 