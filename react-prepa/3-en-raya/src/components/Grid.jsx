import { useDispatch, useSelector } from "react-redux"
import { Cell } from "./Cell"
import { 
    selectGameActive,
    selectCurrentPlayer,
    addCelltoPlayer,
    selectGameCells
 } from "../redux/juegoSlice"

export function Grid({ props }) {


    const gameCells = useSelector(selectGameCells)
    const isGameActive = useSelector(selectGameActive)

    return (
        <div className="grid">

            { gameCells.map( item => 
                <Cell 
                    row={item.row}
                    col={item.col}
                    owner={item.owner}
                    key={`${item.row}-${item.col}`}
                    className={`cell ${item.className}`}
                    isGameActive={isGameActive}
                />
             ) }

        </div>
    )
}