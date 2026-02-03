export function Square( {hue, saturation, lightness} ) {

    const squareStyles = {
        "hsl": `(${hue}, ${saturation}%, ${lightness}%)`
    }


    return (
        <div className="square"
            style={squareStyles}
        > 

        </div>
    )
}