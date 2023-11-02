import React from 'react'

const Card = ({nombre, pais }) => {
  return (
    <div className='card'>
        <h3> 😀 Hola, {nombre} 😀 </h3>
        <h4> 👌Sabemos que eres de {pais}👌 </h4>
    </div>
  )
}

export default Card