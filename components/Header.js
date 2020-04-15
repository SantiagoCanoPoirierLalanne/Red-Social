import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import UTN_logo from '../imagenes/UTN_logo.jpg';


import Home from './Home';

import {Link, Switch, Route} from "react-router-dom"
import Login from './Login'
import RealHome from './RealHome'
import Registro from './Registro'
import PerfilUsuario from './PerfilUsuario'

class Header extends Component {
    render() { 
        return ( 
            <div>
                <header className="header">
                    <div className="header-container">
                        <div className="logo">
                            <img src={UTN_logo} className="header-img"/>
                            <div className="logo-info">      
                                <h1 className="logo-title">UTN FRBA</h1>
                                <p className="logo-sub-title">red social</p>
                            </div>    
                        </div>
                        <navbar className="nav">
                            <ul>
                                <li> <a> <Link to="/" className="nav-link"> LOGIN </Link> </a> </li>
                                <li> <a> <Link to="/registro" className="nav-link"> REGISTRO </Link> </a> </li>
                                {/* <li> <a> <Link to="/" className="nav-link"> HOME </Link> </a> </li> */}
                                <li> <a> <Link to="/usuarios" className="nav-link"> HOME </Link> </a> </li>
                            </ul>
                        </navbar>
                    </div>
                </header>   

               {/*  <RealHome/> */} 

                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/registro" component={Registro} />
                    {/* <Route exact path="/" component={RealHome} /> */} 
                    <Route exact path="/usuarios" component={Home} />
                    <Route path="/usuarios/:id" component={PerfilUsuario} />
                </Switch>
            </div>
        );
    }
}
 
export default Header;

{/*  <nav className="navbar" >
          <Link to="/home" className="navbar-link" >Home </Link>
          <Link to="/usuarios" className="navbar-link" >Usuarios </Link>
        </nav>
        
        <Switch>
            <Route exact path="/home" component={RealHome} />
            <Route path="/usuarios" component={Home} />
        </Switch> */}