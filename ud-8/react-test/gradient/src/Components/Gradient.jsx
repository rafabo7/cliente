import Square from "./Square";


function Gradient({ hue, saturation, number }) {

    const squareList = []

    for (let i = 0; i < number; i++) {
        squareList.push(
            <Square 
                hue={hue}
                saturation={saturation}
                lightness={100 / i}
            />
        )
        
    }
    

    return (
        <div className="gradient">

            {squareList}
            
        </div>
    )
}

export default Gradient