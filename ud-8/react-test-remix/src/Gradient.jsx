import { createLogger } from "vite"
import { Square } from "./Square"

export function Gradient({ hue, saturation, number }) {

    const squares = []

    for (let i = 0; i > number; i++){
        squares.push(
        <Square 
            hue={hue}
            saturation={saturation}
            lightness={ i / 100 }
        />
        )
    }


    return (
        <div className="gradient" >
            {squares}
        </div>
    )
}