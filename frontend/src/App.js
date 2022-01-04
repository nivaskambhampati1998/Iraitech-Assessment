import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.js";
import SignUp from "./components/signup.js";
import Home from "./components/Home";

function App() {
let navbar;

  if(!localStorage.getItem('username')){
    navbar = (<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>Sign up</Link>
              </li>
            </ul>
    </div>)
  }
  else
  {
    navbar = ( <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" onClick={()=>{
                  localStorage.removeItem('username');
                  window.location.href="http://localhost:3000/login";
                }}>Log out</Link>
              </li>
            </ul>
    </div>)
  }
return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand">Iraitech Assessment</Link>
        {navbar}
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;