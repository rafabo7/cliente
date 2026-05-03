export default function Numero ({ valor, color }) {

    const styles = {
        'color': `${color}`,
        'font-size': `${valor}px`
    }

    
    

    return (
        <>
        <li className="lista-numeros__item" style={styles} > {valor} </li>
        </>
    )
}