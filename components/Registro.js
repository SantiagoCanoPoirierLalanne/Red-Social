import React, { Component } from 'react';
import RealHome from './RealHome';

function Registro () {
    return (
        <div>
            <RealHome className="realHome"/>
            <div className="registro">
                <h2 className="registro-title">Crea una cuenta. Es rápido y fácil!</h2>
                
                <form className="registro-form">
                    <input placeholder="Nombres" type="text" required className="registro-form-input"></input> 
                    <input placeholder="Apellidos" type="text" required className="registro-form-input" ></input>
                    <input placeholder="Email" type="email" required className="registro-form-input"></input>
                    <input placeholder="Contraseña Nueva" type="password" required className="registro-form-input"></input>
                    <label className="registro-form-input">Fecha de Nacimiento: <input type="date" min="1910-01-01" max="2015-12-31"></input></label>
                    <button type="submit" className="registro-form-input registro-form-btn">CREAR</button>
                </form>
            </div>
        </div>
    )
}

export default Registro