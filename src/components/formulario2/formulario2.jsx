import React, { Component } from "react";
import '../Logo2/Logo2.css';



class Formulario2 extends Component {
constructor(){
    super();
    this.state = {
        items :[]
    }

}
render(){
    return (
        <div>
        <div> 
            <form>
                <input placeholder= "Nombre usuario" type="text" ref={(input) => this.textInput = input}/>
                <input placeholder = "Correo electrónico" type= "email" ref={(input) => this.emailInput = input}/>
                <input placeholder = "Contraseña" type= "password" ref={(input) => this.passwordInput = input}/>
                <button type="submit">Registrarse</button>
            </form>
        </div>
       </div>
    
    )
}
}

export default Formulario2 ; 