import { useDispatch } from "react-redux"
import { 
    setHue,
    setSteps,
    setSaturation
 } from "../gradientSlice"
export default function Picker({ hue, saturation, steps }) {

    const dispatch = useDispatch()

    

    return (
        <div className="picker" >
            <label>
                Hue
            </label>
                <input 
                type="range" 
                name="hue"
                onChange={ (e) => dispatch(setHue(e.target.value))}
                value={hue} 
                min={0} 
                max={360} />
            <label>
                Saturation
            </label>
                <input 
                type="range" 
                name="saturation" 
                value={saturation}
                onChange={ (e) => dispatch(setSaturation(e.target.value))}
                min={0} 
                max={100} />
            <label>
                Steps
            </label>
                <input 
                type="range" 
                name="steps" 
                value={steps} 
                onChange={ (e) => dispatch(setSteps(e.target.value))}
                min={5} 
                max={15} />

        </div>
    )
}

