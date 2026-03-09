import Cell from "./Cell"

export default function Grid() {


    const grid = []

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            grid.push(
                <Cell
                    key={`${i}-${j}`} 
                    row={i}
                    col={j}
                    isBlocked={true}
                />
            )
        }

    }

    return (

        <div className="grid" >
            {grid}
        </div>

    )
}