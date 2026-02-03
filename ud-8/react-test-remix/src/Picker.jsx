function Picker({ props }) {

    return (
        <div className="picker" >
            <label>
                Hue
                <input type="range" name="hue" min={0} max={360} />
            </label>
            <label>
                Saturation
                <input type="range" name="saturation" min={0} max={100} />
            </label>
            <label>
                Steps
                <input type="range" name="steps" min={5} max={15} />
            </label>
        </div>
    )
}

export default Picker