import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Inicio from "./components/Inicio/Inicio";
import Perfil from "./components/Perfil/Perfil";
import Amigos from "./components/Amigos/Amigos"; 
import Login from "./components/Login/Login";


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
        </div>          
      </Router>
    );
  }
}

export default App;
