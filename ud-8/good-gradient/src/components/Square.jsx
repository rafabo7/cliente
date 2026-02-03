export default function Square( {hue, saturation, lightness} ) {

    const squareStyles = {
        "backgroundColor": `hsl(${hue}, ${saturation}%, ${lightness}%)`
    }

    console.log(squareStyles)


    return (
        <div className="square"
            style={squareStyles}
        > 

        </div>
    )
}