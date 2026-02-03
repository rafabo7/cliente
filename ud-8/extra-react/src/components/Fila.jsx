
export default function Fila({ size, color, number }){

    const style = {
        "backgroundColor": color,
        "width": `${size}px`,
        "height": `50px`,
        "marginRight": "5px"
    }


    let divs = []

    for ( let i = 0; i < number; i++ ) {
        divs.push( <div 
                        className="cuadro"
                        style={style} >
                    </div>
                         )
    }


    return(
        <div className="fila">
            {divs}
        </div>
    )
}