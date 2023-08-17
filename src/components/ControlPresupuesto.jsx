import { useEffect, useState } from 'react'

const ControlPresupuesto = ({ gastos, presupuesto }) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado,setGastado] = useState(0);


    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto ) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;


        setGastado(totalGastado);
        setDisponible(totalDisponible);

    }, [gastos])

    const formatearCantidad = (cantidad) => {
        
        return cantidad.toLocaleString('en-US', {
            /*style: 'currency',*/
            /*currency: 'USD'*/
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
                        <span>Presupuesto: </span>S/.{formatearCantidad(presupuesto)}
                    </p>
                </div>

                <div className='contenido-presupuesto'>
                    <p>
                        <span>Disponible: </span>S/.{formatearCantidad(disponible)}
                    </p>
                </div>

                <div className='contenido-presupuesto'>
                    <p>
                        <span>Gastado: </span>S/.{formatearCantidad(gastado)}
                    </p>
                </div>
            </div>


        </div>
    )
}

export default ControlPresupuesto