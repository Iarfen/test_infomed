import React from 'react';
import {
  Route,
  NavLink,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import './Login.css';

function Login()
{
    return (
    <div className="content">
        <h1>InfoMED</h1>
        <div>
            <div>Usuario</div>
            <input type="text" className="textInput" />
        </div>
        <div className="password">
            <div>Contraseña</div>
            <input type="password" className="textInput" />
        </div>
        <div className="button">
            <NavLink to="/users">Iniciar Sesión</NavLink>
        </div>
    </div>
    );
}

export default Login;
