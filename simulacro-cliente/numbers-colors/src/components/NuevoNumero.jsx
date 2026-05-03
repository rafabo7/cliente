import { useState } from "react"
import { useDispatch } from "react-redux"
import { addNumber } from "../redux/numbersSlice"

export default function NuevoNumero() {

    const [valor, setValue] = useState(15)
    const [color, setColor] = useState("#00ff00")

    const dispatch = useDispatch()

    const MIN = 15
    const MAX = 50

    function handleAdd(e) {
        e.preventDefault()
        dispatch(addNumber({valor, color}))


    }

    return (

        <div className="nuevo-numero">

            <label className="nuevo-numero__label">
                Tamaño: 15
                <input
                    className="nuevo-numero__input"
                    min={MIN}
                    onChange={(e) => setValue(e.target.value)}
                    max={MAX}
                    type="range"
                    value={valor} />
            </label>

            <label className="nuevo-numero__label">
                Color:
                <input
                    className="nuevo-numero__input"
                    type="color"
                    onChange={(e) => setColor(e.target.value)}
                    value={color} />
            </label>

            <button onClick={ handleAdd } className="nuevo-numero__button">Añadir</button>

        </div>
    )
}