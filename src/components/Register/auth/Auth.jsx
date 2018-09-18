import React, { Component } from 'react';
import fire from '../confi/Fire';
import Perfil from '../../Perfil/Perfil';
import Registro from '../Register';

class Auth extends Component {
    constructor(){
        super();
        this.state = ({
            user: null,
        });
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount(){
        this.authListener();
    }

authListener(){
    fire.auth().onAuthStateChanged((user)=> {
        //console.log(user);
        if (user){
            this.setState({ user });
            localStorage.setItem('user', user.uid);
        }else {
            this.setState({ user: null });
            localStorage.removeItem('user');
        }
    });
}

render (){
    return (
        <div> {this.state.user? : (<Perfil />) : (<Registro />)}
        </div>
    );
}
}

export default Auth ;
