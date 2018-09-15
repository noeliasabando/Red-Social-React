import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


import Inicio from "./components/Inicio/Inicio";
import Perfil from "./components/Perfil/Perfil";
import Amigos from "./components/Amigos/Amigos"; 
import Login from "./components/Login/Login";

import './App.css';
import Register from "./components/Register/Register";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Inicio} />    
          <Route path="/profile" component={Perfil} />     
          <Route path="/friends" component={Amigos} /> 
          <Route path="/register" component={Register} />      
        </div>          
      </Router>
    );
  }
}

export default App;
