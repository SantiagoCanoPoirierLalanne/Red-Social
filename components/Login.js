import React, { Component } from 'react';
import RealHome from './RealHome';

function Login () {
    return (
        <div className="login-contenedor">
            <RealHome className="realHome"/>
            <div className="login">
                <h3 className="login-title">Complete sus datos e ingrese a su cuenta</h3>
                <form className="login-form">
                    <div><input type="email" placeholder="Email" className="login-form-input" required/> </div>
                    <div><input type="password" placeholder="Password" className="login-form-input" required/> </div>
                    <button type="submit" className="login-form-input login-form-btn">Ingresar</button>
                </form>
            </div>
        </div>
    )
}

export default Login