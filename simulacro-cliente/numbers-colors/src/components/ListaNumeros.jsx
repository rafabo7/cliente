import { useSelector } from "react-redux"
import { selectNumeros } from "../redux/numbersSlice"
import Numero from "./Numero"

export default function ListaNumeros () {

    const numbers = useSelector(selectNumeros)

    return (
        <ul className="lista-numeros">
            {numbers.map(item => <Numero key={`${item.valor}-${item.color}`} valor={item.valor} color={item.color} />)}
        </ul>
    )
}