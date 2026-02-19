import Square from "./Square"

import { setEmpty } from "../redux/gridSlice";
import { useDispatch } from "react-redux";


export default function Grid({ rows, columns, empty, size = 100 }) {

    const dispatch = useDispatch()

    const squares = []
    const styles = {
        gridTemplateColumns: "repeat(3, 40px)",
        gridTemplateRows: "repeat(3, 40px)",

    }

    function handleEmpty(row, col) {
        console.log({ handle :{row, col} });
        

        if (
            (row == empty.row &&
                (
                    col == empty.col +1 ||
                    col == empty.col -1
                )
            ) ||
            (
                col == empty.col &&
                (
                    row == empty.row +1 ||
                    row == empty.row -1
                )
            )

        ) {
            dispatch(setEmpty({ row, col }))
        }


    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let isempty = false
            if (i+1 == empty.row && j+1 == empty.col) {
                isempty = true
            }
            squares.push(
                <Square
                    key={`${i}-${j}`}
                    row={i + 1}
                    column={j + 1}
                    isEmpty={isempty}
                    handleEmpty={handleEmpty}
                />
            )
        }
    }

    return (
        <>
            <div className="grid-container" style={styles} >
                {squares}
            </div>
        </>
    )
}