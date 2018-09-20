//import React, { Component } from "react";
import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";


import Inicio from "./components/Inicio/Inicio";
import Perfil from "./components/Perfil/Perfil";
import Amigos from "./components/Amigos/Amigos"; 
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import * as routes from '../src/constantes/routes';
import Navbar from '../src/components/Navbar/Navbar';

const App = () =>
<Router>
<div>
   

    <hr/>
<Route 
  exact path ={routes.AMIGOS}
  component ={Amigos}
  />
<Route 
  exact path ={routes.INICIO}
  component ={Inicio}
  />
<Route
  exact path ={routes.LOGIN}
  component ={Login}
  />
<Route
  exact path ={routes.PERFIL}
  component ={Perfil}
  />
 <Route 
  exact path ={routes.REGISTER}
  component ={Register} 
  />
 </div>
</Router>
//import { library } from '@fortawesome/fontawesome-svg-core';
//import { faEnvelope, faFileImage,faPlay, faMusic,faHeart,faTrashAlt} from '@fortawesome/free-solid-svg-icons';

//library.add(faEnvelope, faFileImage,faPlay,faMusic,faHeart,faTrashAlt);

/*
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Register} />    
          <Route path="/login" component={Login} />    
          <Route path="/home" component={Inicio} />  
          <Route path="/profile" component={Perfil} />     
          <Route path="/friends" component={Amigos} /> 
        </div>          
      </Router>
    );
  }
}
*/
export default App;
