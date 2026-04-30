import { useDispatch, useSelector } from "react-redux"
import { selectFilter, setFilter } from "../todoSlice"

export default function Filtros() {

    const dispatch = useDispatch()
    const filterActive = useSelector(selectFilter)

    const filters = [
        {
            label: 'Todos',
            value: '',
        },
        {
            label: 'Pendientes',
            value: 'pending',
        },
        {
            label: 'Completadas',
            value: 'fulfilled',
        },
    ]

    return (
        <div className="filtros">
            { filters.map( (item, index) => <button 
                onClick={() => dispatch(setFilter(item.value))} 
                className={item.value === filterActive ? 'active' : ''}  
                key={index} 
                > {item.label} </button>) }
        </div>
    )
}