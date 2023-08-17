import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'

import { generarId } from './helpers'

import ListadosGastos from './components/ListadosGastos'

import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
    const [gastoEditar, setGastoEditar] = useState({});

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setModal(true);

            setTimeout(() => {
                setAnimarModal(true);
            }, 500);
        }
    }, [gastoEditar])


    const [gastos, setGastos] = useState([]);

    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

    const [modal, setModal] = useState(false);
    const [animarModal, setAnimarModal] = useState(false);



    const handleNuevoGasto = () => {
        setModal(true);
        setGastoEditar({});

        setTimeout(() => {
            setAnimarModal(true);
        }, 500);
    };

    const GuardarGasto = gasto => {
        gasto.id = generarId();

        // Fecha
        gasto.fecha = Date.now();

        setGastos([...gastos, gasto]);

        setAnimarModal(false)
        setTimeout(() => {
            setModal(false);
        }, 500);

    }

    const [presupuesto, setPresupuesto] = useState(0);
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    return (
        <div className={modal ? 'fijar' : ''}>
            <Header
                gastos={gastos}

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
                <>
                    <main>
                        <ListadosGastos
                            gastos={gastos}
                            setGastoEditar={setGastoEditar}
                        />
                    </main>

                    <div className='nuevo-gasto'>
                        <img
                            src={IconoNuevoGasto}
                            alt="icono nuevo gasto"
                            onClick={handleNuevoGasto}
                        />
                    </div>
                </>

            )}

            {modal &&
                <Modal
                    setModal={setModal}
                    animarModal={animarModal}
                    setAnimarModal={setAnimarModal}

                    GuardarGasto={GuardarGasto}

                    gastoEditar={gastoEditar}
                />
            }


        </div>
    )
}

export default App
