import React,{useState, useEffect}  from 'react';


import {useParams,useHistory} from "react-router-dom"

function PerfilUsuario () {
    const [datos,setDatos]=useState({})
    const {id} = useParams()
    const history = useHistory();

    const [isLoaded,setisLoaded]= useState(false)

    useEffect(
        () => {
            fetch(`https://my-json-server.typicode.com/motita2310/listaDePersonas/posts/${id}`)
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
                    <img className='foto' src={datos.img} /> <br/>
                    <p>Nombre: {datos.name}</p> 
                    <p>UserName: {datos.username}</p>
                    <p>Email: {datos.email}</p>
                    <p>Ciudad: {datos.city}</p>
                </div>
    
                <button onClick={handleClick} className="btn-volver" >Volver</button>
    
            </div>
        )
    }
    
}

export default PerfilUsuario