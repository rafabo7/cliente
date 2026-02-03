import { useState } from "react"

export default function Form({ onAdd }) {


    
    const SPACE_AVAILABLE = 888
    const GAP = 5
    
    const [ maxSize, setMaxSize ] = useState()
    // const [ minSize , setMinSize ] = 0
    const minSize = 10
    const [ maxNumber, setMaxNumber] = useState()
    // const [ minNumber, setMinNumber ] = 0
    const minNumber = 1
    
    const colors = []

    const [ numberValue, setNumberValue ] = useState(minNumber)
    const [ sizeValue, setSizeValue ] = useState(minSize)

    const [ color, setColor ] = useState("Red")

    const [ message, setMessage ] = useState('')

    function checkSpace() {
        
        const spaceNeeded = ( numberValue * sizeValue ) + (numberValue * GAP)

        if ( spaceNeeded > SPACE_AVAILABLE ) {
            return false
        } else return true
    }

    function getMaxSize(){

        let space = SPACE_AVAILABLE - (numberValue*GAP)
        let maxSize = Math.floor(space / numberValue)

       

        setMaxSize(maxSize)


    }
    
    function getMaxNumber(){

        let maxNumber = Math.floor(SPACE_AVAILABLE / ( parseInt(sizeValue) + 5))

        
        setMaxNumber(maxNumber)


    }



    function handleSize(e){
            setSizeValue(e.target.value)
            
            getMaxNumber()
            setMessage('')
       
    }

    function handleNumber(e){
            setNumberValue(e.target.value)
            
            getMaxSize()
            setMessage('')
            
    }

    function handleColor(e){
        setColor(e.target.value)

    }

    function handleAddRow(){
        if ( checkSpace() ) {
            setMessage("Fila añadida")
            onAdd( sizeValue, numberValue, color )
            setSizeValue(minSize)
            setNumberValue(minNumber)


        } else {
            setMessage("No se puede añadir la fila, no hay espacio")
        }
    }


    return (
        
        <div className="form">
            <label> Size: {sizeValue} 
                <input 
                onChange={handleSize}
                min={minSize} 
                max={maxSize} 
                type="range" 
                value={sizeValue} ></input>
            </label>
            <label>Number: {numberValue} 
                <input 
                onChange={handleNumber}
                min={minNumber} 
                max={maxNumber} 
                type="range" 
                value={numberValue} ></input>
            </label>
            <label>Color:
                <select onChange={handleColor} >
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="purple">Purple</option>
                </select>
            </label>
            <button onClick={handleAddRow} >Añadir Fila</button>

            <p> {message} </p>
        </div>

    )
}