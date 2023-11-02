
import './App.css'
import Card from './Components/Card'
import React, { useState } from 'react';

function App() {

  const [usuario, setUsuario] = useState ({
    nombre: '',
    pais: ''
  })
  const [show, setShow]=useState(false)
  const [error, setError]= useState(false)
  const handleSubmit = (event)=>{
    event.preventDefault()
    if(usuario.nombre.length > 3 && usuario.pais.length > 6 && !usuario.nombre.includes(' ')){
      setShow(true)
      setError(false)
    }else{ setError(true)}
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label >Nombre</label>
      <input type="text" value = {usuario.nombre} onChange={(e)=> {setUsuario({...usuario, nombre: e.target.value.trimStart()})}}/>

      <label >País</label>
      <input type="text" value = {usuario.pais} onChange={(e)=> {setUsuario({...usuario, pais: e.target.value.trimStart()})}} />
      <button>Enviar</button>
      </form>
      {show ?
      <Card nombre={usuario.nombre} pais={usuario.pais} />
      : null
      }
      {error && <h5> 😭 Por favor chequea que la información sea correcta 😭 </h5>}
    </>
  )
}

export default App
