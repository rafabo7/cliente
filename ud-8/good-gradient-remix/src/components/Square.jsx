export default function Square( {hue, saturation, lightness} ) {

    const squareStyles = {
        "backgroundColor": `hsl(${hue}, ${saturation}%, ${lightness}%)`
    }



    return (
        <div className="square"
            style={squareStyles}
        > 

        </div>
    )
}