import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
    const [count, setCount] = useState(0)
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

    const [modal, setModal] = useState(false);
    const [animarModal, setAnimarModal] = useState(false);

    const handleNuevoGasto = () => {
        setModal(true);

        setTimeout(() => {
            setAnimarModal(true);
        }, 500);
    };

    const GuardarGasto = gasto => {
        console.log(gasto);
    }

    const [presupuesto, setPresupuesto] = useState(0);
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    return (
        <>
            <Header
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}

                disponible={disponible}
                setDisponible={setDisponible}

                gastado={gastado}
                setGastado={setGastado}


                isValidPresupuesto={isValidPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}

            />

            {isValidPresupuesto && (
                <div className='nuevo-gasto'>
                    <img
                        src={IconoNuevoGasto}
                        alt="icono nuevo gasto"
                        onClick={handleNuevoGasto}
                    />
                </div>
            )}

            {modal && 
                <Modal
                    setModal={setModal}
                    animarModal={animarModal}
                    setAnimarModal={setAnimarModal}

                    GuardarGasto={GuardarGasto}
                />
            }


        </>
    )
}

export default App
