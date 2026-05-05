import { useDispatch } from "react-redux"
import { desbloquearCasilla } from "../redux/ratonQuesoSlice"

export default function Cell({ item }) {

    const { row, col } = item
    const content = checkForContent(item.content)

    const dispatch = useDispatch()
    const state = item.desbloqueada ? '' : 'bloqueado'

    return (

        <div
            className={`cell ${state}`}
            onClick={() => dispatch(desbloquearCasilla({ row, col }))}
        >
            {content}

        </div>

    )
}



function checkForContent(content) {
    switch (content) {
        case 'queso':

            return '🧀'

        case 'raton':

            return '🐭'

        default:
            return ''
    }
}
