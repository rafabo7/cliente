import Square from "./Square"

export default function Gradient({ hue, saturation, number }) {

    const squares = []

    for (let i = 0; i < number; i++){
        squares.push(
        <Square 
            key={i}
            hue={hue}
            saturation={saturation}
            lightness={ 100 / i + 0.1 }
        />
        )
    }


    return (
        <div className="gradient" >
            {squares}
        </div>
    )
}

