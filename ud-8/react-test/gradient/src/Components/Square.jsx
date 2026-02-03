function Square({ hue, saturation, lightness }) {

    const style = {
        backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`
    }


    return (
        <div className="square" style={style}>

        </div>
    )
}

export default Square