import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import shrek from '../imagenes/shrek.jpg';

import {Link} from "react-router-dom"


export default class Usuario extends React.Component {
    constructor(props){
        super(props);
        this.state = {  
            amigo: false
        }
        this.agregarQuitarAmigo=this.agregarQuitarAmigo.bind(this);
    }

    agregarQuitarAmigo(prevState){
        this.setState(prevState => ({
            amigo: !prevState.amigo
        })
        )
    }
    
    render() {
        return (
            <div className='usuario'>
                <img className='foto' src={shrek} /> <br/>
                <h3 className="nombre">Nombre: {this.props.datos.name} </h3>
                <h3 className="city">Ciudad: {this.props.datos.address.city} </h3>
                <button className="nombre-link"><Link className="link" to={`/usuarios/${this.props.datos.id}`}>VER PERFIL</Link></button>
                <div className="divBoton">    
                    <button className="btn-agregar" onClick={this.agregarQuitarAmigo } > {this.state.amigo ? 'ELIMINAR' : 'AGREGAR'} </button>
                    <p className="amigo-text" > {this.state.amigo ? 'Es mi amigo!' : '' } </p>
                </div>
            </div>
        )
    }
}

{/* <div className="contenedor">
                <div className='usuario'>
                    <img className='foto' src={shrek} /> <br/>
                    <h3 className="nombre"> <Link className="nombre-link" to={`/usuarios/${this.props.datos.id}`}>{this.props.datos.name}</Link> de la ciudad de {this.props.datos.address.city} </h3>
                    <div className="divBoton">    
                        <button className="btn" onClick={this.agregarQuitarAmigo } > {this.state.amigo ? 'DEJAR DE SER AMIGOS' : 'SER AMIGOS'} </button>
                        <h3 className="amigo-text" > {this.state.amigo ? 'Es mi amigo!' : '' } </h3>
                    </div>
                </div>
            </div> */}