import Fila from "./Fila"

export default function Filas({ rowData }) {

    console.log(rowData[1])

    let filas = []

    for ( let i = 0; i < rowData.length; i++ ) {
        console.log(rowData[i])
        filas.push( 
            <Fila 
                size={rowData[i].size} 
                number={rowData[i].number}
                color={rowData[i].color}
             /> )
    }

    return (
        <div className="filas">
            {filas}
        </div>
    )
}