import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { auth } from '../Firebase/firebase';
import * as routes from '../../constantes/routes';
import Logo2 from '../Register/Logo2/Logo2';
import './Register.css'

const Register = ({ history }) =>
<div>
    <Logo2 />
    <SignUpForm  history={history}/>
    
</div>

//inicia el estado del componente y captura la info del usuario, mas un objeto error
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
    
};

//implementar los campos de entrada para capturar la info en el metodo de representacion del componente. los input necesitan actualizar el estado local del componente para eso se usa onChange
const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});


//Gestiona el estado del formulario en el estado local 
class SignUpForm extends Component {
    constructor(props){
        super(props);

        this.state = {...INITIAL_STATE};
    }
    
    onSubmit = (event) =>{
        const{
            username,
            email,
            passwordOne
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
            this.setState({...INITIAL_STATE});
            history.push(routes.INICIO);
            console.log('holi');
           
        })
        .catch(error => {
            this.setState(byPropKey('error', error));
        });
        
        event.preventDefault();
    }
    render(){
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid = 
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '' ;
       
        return(
            <section className="imagenFondo">
             <div className="container">
            <div className="row">
                <div className="col-12 col-md-12 text-center">
            <form className="formulario" onSubmit={this.onSubmit}>

            <input className="botonFacebook" id="facebookButton" onclick="facebookLoginWithFirebase()" type="button" value="Iniciar sesión con Facebook"></input>

            <hr className="style1"></hr>
                <input 
                    value={username}
                    onChange={event => this.setState(byPropKey('username', event.target.value))}
                    className="inputRegistro"
                    type= "text"
                    placeholder= "Full Name"
                    />
                    <input
                        value={email}
                        onChange={event => this.setState(byPropKey('email', event.target.value))}
                        className="inputRegistro"
                        type="text"
                        placeholder="Email Address"
                        />
                    <input 
                        value={passwordOne}
                        onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                        className="inputRegistro"
                        type="password"
                        placeholder="Password"
                        />
                    <input
                        value={passwordTwo}
                        onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                        className="inputRegistro"
                        type="password"
                        placeholder="Confirm Password"
                        />
                    <button disabled= {isInvalid} type="submit" className="botonRegistro">Sign Up</button>

                    {error && <p>{error.message}</p>}
            </form>
            <Link className="nav-link registrate" to={routes.LOGIN} >Entrar</Link>
            </div>
            </div>
            </div>
            </section>
        );
    }
}

const SignUpLink = () =>
    <p>
        Don't have an account?account
        {' '}
        <Link to={routes.REGISTER}>Sign Up</Link>
    </p>
    

export default withRouter(Register);

export{
    SignUpForm,
    SignUpLink
};

/*import React, { Component } from 'react';
import Formulario from './Formulario/Formulario';
import Logo2 from './Logo2/Logo2';
//import {auth} from '../Firebase/firebase';
//import Link from "../Register/Link/Link"



class Register extends Component {
    render(){
        return(
            <div>
                <Logo2 />
                <Formulario />
            </div>
        )
    }
}

export default Register;
*/