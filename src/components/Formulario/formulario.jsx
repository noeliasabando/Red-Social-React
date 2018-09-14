import React, { Component } from "react";
import '../Logo2/Logo2.css';



class Formulario extends Component {
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
                 <input placeholder = "Correo electrónico" type= "email" ref={(input) => this.emailInput = input}/>
                 <input placeholder = "Contraseña" type= "password" ref={(input) => this.passwordInput = input}/>
                 <button type="submit">Iniciar Sesión</button>
             </form>
         </div>
        </div>
    )
}
}

export default Formulario ; 