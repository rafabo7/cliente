import { useSelector } from "react-redux"
import { selectCasillas } from "../redux/ratonQuesoSlice"
import Cell from "./Cell"

export default function Grid() {

    const casillas = useSelector(selectCasillas)

    return (

        <div className="grid">
            {
                casillas.map(item => <Cell 
                    key={`${item.row}-${item.col}`} 
                    item={item} 
                    />)
            }
        </div>

    )
}