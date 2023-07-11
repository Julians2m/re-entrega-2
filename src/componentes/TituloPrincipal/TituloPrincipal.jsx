import React from 'react'

const TituloPrincipal = ({titulo, dia}) => {
return (
    <>
        <h1> {titulo} </h1>
        <h2>Hoy es dia {dia} </h2>

    </>
)
}

export default TituloPrincipal