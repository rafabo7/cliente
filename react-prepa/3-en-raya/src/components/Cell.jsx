import { useDispatch, useSelector } from "react-redux";
import { addCelltoPlayer, selectCurrentPlayer } from "../redux/juegoSlice";
import { useState } from "react";

export function Cell ({row, col, className, isGameActive, owner }) {

    const dispatch = useDispatch()

    return (
        <div 
            className={className} 
            disabled={!isGameActive}
            onClick={() => {
                if ( owner === null ) dispatch(addCelltoPlayer({row, col})
            )} }
        >
            
        </div>
     )
}
