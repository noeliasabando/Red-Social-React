import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


import Inicio from "./components/Inicio/Inicio";
import Perfil from "./components/Perfil/Perfil";
import Amigos from "./components/Amigos/Amigos"; 

import './App.css';

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
