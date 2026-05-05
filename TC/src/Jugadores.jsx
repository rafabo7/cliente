import { useDispatch } from "react-redux"
import { comenzar } from "./redux/juegoSlice"
import { useState } from "react"

export function Jugadores() {
    const dispatch = useDispatch()

    const [jugadoresInput, setJugadoresInput] = useState(3)
    
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(comenzar(jugadoresInput))
    }
    

    return (
        <div className="jugadores">
            <p>Jugadores : {jugadoresInput}</p>
            <form
                action="#"
                onSubmit={handleSubmit}>
                <input
                    type="number"
                    min="3" max="6"
                    value={jugadoresInput}
                    onChange={(e) => setJugadoresInput(e.target.value)} />
                <button > Comenzar </button>
            </form>
        </div>
    )
}