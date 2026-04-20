import { useSelector } from "react-redux"
import { selectCurrentPlayer, selectGameActive } from "../redux/juegoSlice"

export function Board({ props }) {

    const player = useSelector(selectCurrentPlayer)
    const isGameActive = useSelector(selectGameActive)
    
    return isGameActive && (
        <div className="board">

            Turn of {player.name}

        </div>
    )
}