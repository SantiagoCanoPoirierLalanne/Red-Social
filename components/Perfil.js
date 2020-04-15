import React, { Component } from 'react';

class Perfil extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div>
                Nombre y Apellido: {this.props.datos.name}
            </div>
        );
    }
}
 
export default Perfil;