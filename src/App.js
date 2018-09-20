import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Inicio from "./components/Inicio/Inicio";
import Perfil from "./components/Perfil/Perfil";
import Amigos from "./components/Amigos/Amigos"; 
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";


import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faFileImage,faPlay, faMusic,faHeart,faTrashAlt} from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faFileImage,faPlay,faMusic,faHeart,faTrashAlt);



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Inicio} />    
          <Route path="/profile" component={Perfil} />     
          <Route path="/friends" component={Amigos} /> 
          <Route path="/login" component={Login} />    
          <Route path="/register" component={Register} />  
        </div>          
      </Router>
    );
  }
}

export default App;
