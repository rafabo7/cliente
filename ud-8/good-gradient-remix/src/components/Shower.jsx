

export default function Shower({ hue, saturation, steps}){

    return (
        <div className="shower">
            <p>Hue: {hue}</p>
            <p>Saturation: {saturation} </p>
            <p>Steps: {steps} </p>
        </div>
    )
}