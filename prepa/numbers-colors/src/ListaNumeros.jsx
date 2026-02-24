import { generarListaAleatoria } from "./randomItems"
import { useDispatch, useSelector } from "react-redux"
import { 
    setInitialNumbers,
    selectNumbers,
    handleClickNumber
 } from "./redux/numbersSlice"
import { useEffect } from "react"


 
 
 export default function ListaNumeros({ props }) {

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(setInitialNumbers(generarListaAleatoria()))
    } , [])


    const listaAleatoria = useSelector(selectNumbers)

    // console.log(listaAleatoria);

    function handleclick(item){
        
        dispatch(handleClickNumber(item))
    }
    
    
    const listaAleatoriaFormat = listaAleatoria?.map((item, index) => {
        return (
            <li 
                className="lista-numeros__item" 
                onClick={() => handleclick(item)}
                key={index} 
                style={{ 'color': item.color, 'fontSize': item.valor }} 
                > {item.valor} 
            </li>
        )
    })

    

    return (
        <>
            <ul className="lista-numeros">
                {listaAleatoriaFormat}
            </ul>
        </>
    )
}