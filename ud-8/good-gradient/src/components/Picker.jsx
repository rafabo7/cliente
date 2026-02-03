export default function Picker({ hue, saturation, steps, setHue, setSaturation, setSteps }) {

    return (
        <div className="picker" >
            <label>
                Hue
            </label>
                <input 
                type="range" 
                name="hue"
                onChange={ (e) => setHue(e.target.value)}
                defaultValue={hue} 
                min={0} 
                max={360} />
            <label>
                Saturation
            </label>
                <input 
                type="range" 
                name="saturation" 
                defaultValue={saturation}
                onChange={ (e) => setSaturation(e.target.value)}
                min={0} 
                max={100} />
            <label>
                Steps
            </label>
                <input 
                type="range" 
                name="steps" 
                defaultValue={steps} 
                onChange={ (e) => setSteps(e.target.value)}
                min={5} 
                max={15} />

        </div>
    )
}

