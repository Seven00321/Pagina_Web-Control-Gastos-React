import { useState } from 'react'
import Header from './components/Header'

function App() {
    const [count, setCount] = useState(0)
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

    const [presupuesto, setPresupuesto] = useState(0); 

    return (
        <>
            <Header
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                isValidPresupuesto= {isValidPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
            
            />

        </>
    )
}

export default App
