import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'


const Header = ({
    gastos,
    presupuesto, 
    setPresupuesto,
    disponible, 
    setDisponible,
    gastado, 
    setGastado, 
    isValidPresupuesto, 
    setIsValidPresupuesto}
    ) => {

    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {isValidPresupuesto ? (
                <ControlPresupuesto
                    gastos={gastos}

                    presupuesto={presupuesto}

                    disponible={disponible}
                    gastado={gastado}

                    
                />
                

            ) : (
                <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}

                disponible={disponible}
                setDisponible={setDisponible}

                gastado={gastado}
                setGastado={setGastado}



                setIsValidPresupuesto={setIsValidPresupuesto}

            />)}

            
        </header>
    )
}

export default Header