import React, { Component } from 'react';

import Usuario from './Usuario';
import RealHome from './RealHome';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            error: null,
            isLoaded: false,
            perfiles:[]
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded:true,
                        perfiles:result
                    });
                },
                (error) => {
                    console.log(error.message)
                    this.setState({
                        isLoaded:true,
                        error:error
                    });
                }
            )
    }

    render() { 
        const{error,isLoaded,perfiles}=this.state;
        if (error) {
            return (<div>Error: {error} </div>)
        } else if (!isLoaded) {
            return (<div className="loading-container"><h2 className="loading">Loading...</h2></div>)
        } else {
            return (
                <div>
                    <RealHome/>
                    <h2 className="home-subtitle">---Perfiles Registrados---</h2>
                    
                    <div className="contenedor-usuarios">
                        { perfiles.map(
                            perfil => <Usuario datos={perfil}/>
                        )}

                    </div>
                </div>
               
            );
        }  
    }
}
 
export default Home;

