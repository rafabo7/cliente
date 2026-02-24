import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { selectForm, setFormColor, setFormFont, addNumber } from "./redux/numbersSlice"


export default function NuevoNumero({ props }) {

    const dispatch = useDispatch()

    const {valor, color} = useSelector(selectForm) 

    function handleColor(e){

        dispatch(setFormColor(e.target.value))

        
    }

    function handleFont(e){
        dispatch(setFormFont(e.target.value))

    }

    function handleAdd(){
        dispatch(addNumber())
    }

    return (

        <div className="nuevo-numero">

            <label className="nuevo-numero__label">
                Tamaño: {valor}
                <input className="nuevo-numero__input" min="15"
                    max="50" type="range" value={valor} onChange={handleFont}  />
            </label>

            <label className="nuevo-numero__label">
                Color:
                <input
                    className="nuevo-numero__input" type="color" value={color} onChange={handleColor}  />
            </label>

            <button className="nuevo-numero__button" onClick={handleAdd} >Añadir</button>

        </div>

    )
}