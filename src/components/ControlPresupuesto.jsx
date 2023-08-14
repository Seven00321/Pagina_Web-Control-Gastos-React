import React from 'react'

const ControlPresupuesto = ({ presupuesto, disponible, gastado }) => {

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>

            <div>
                <p>Grafica aqui</p>
            </div>


            <div className='contenedor'>
                <div className='contenido-presupuesto'>
                    <p>
                        <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
                    </p>
                </div>

                <div className='contenido-presupuesto'>
                    <p>
                        <span>Disponible: </span>{formatearCantidad(disponible)}
                    </p>
                </div>

                <div className='contenido-presupuesto'>
                    <p>
                        <span>Gastado: </span>{formatearCantidad(gastado)}
                    </p>
                </div>
            </div>


        </div>
    )
}

export default ControlPresupuesto