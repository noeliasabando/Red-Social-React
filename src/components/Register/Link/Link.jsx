import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../../Login/Login';


const Ruta = () => (
  <Router>
    <div>
      <Link to="/" className="link">Entrar</Link>
      <Route exact path="/" component={Login} />
    </div>
  </Router>
);



export default Ruta;