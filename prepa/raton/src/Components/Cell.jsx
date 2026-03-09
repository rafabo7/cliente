import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import {
    setCasillasDesbloqueadas,
    selectIsPlaying,
    selectQueso,
    selectRaton
} from "../redux/juegoSlice"


export default function Cell({ isBlocked, row, col }) {

    const dispatch = useDispatch()

    const queso = useSelector(selectQueso)
    const raton = useSelector(selectRaton)
    const isPlaying = useSelector(selectIsPlaying)

    const [cell, setCell] = useState(isBlocked)

    let className = cell ? "cell bloqueado" : "cell"

    function checkQuesoRaton(item) {
        if (item.row == raton.row && item.col == raton.col) return "🐭"

        if (item.row == queso.row && item.col == queso.col) return "🧀"

        return ""

    }


    function handleClick() {
        if (cell && !isPlaying) {
            setCell(!cell)
            dispatch(setCasillasDesbloqueadas({ row, col }))
        }
    }

    return (
        <div className={className} onClick={handleClick}  > {checkQuesoRaton({row, col})} </div>

    )
}