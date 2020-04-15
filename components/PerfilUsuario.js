import React,{useState, useEffect}  from 'react';

import RealHome from './RealHome';

import {useParams,useHistory} from "react-router-dom"

function PerfilUsuario () {
    const [datos,setDatos]=useState({})
    const {id} = useParams()
    const history = useHistory();

    const [isLoaded,setisLoaded]= useState(false)

    useEffect(
        () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setDatos(result)
                    setisLoaded(true)
                },
                (error) => {
                    console.log(error.message)
                }
            )
        }
    )
    console.log(isLoaded) 

    function handleClick() {
        history.push("/usuarios")  
    }    
    if (isLoaded === false) {
        return (<div className="loading-container"><h2 className="loading">Loading...</h2></div>)
    } else if (isLoaded === true) {
        return (
            <div className="perfil-usuario">
                <h2>Perfil del Usuario</h2> 
                
                <div>
                    <p>Nombre: {datos.name}</p> 
                    <p>UserName: {datos.username}</p>
                    <p>Email: {datos.email}</p>
                    <p>Telefono: {datos.phone}</p>
                    <p>Website: {datos.website}</p>
                </div>
    
                <button onClick={handleClick} className="btn-volver" >Volver</button>
    
            </div>
        )
    }
    
}

export default PerfilUsuario