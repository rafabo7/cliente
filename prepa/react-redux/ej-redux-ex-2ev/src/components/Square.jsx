

export default function Square({ row, column, isEmpty, handleEmpty }) {

    const squareClass = isEmpty ? 'empty' : ''

    const styles = {
        gridArea : `${row} / ${column}`,
    }

    return (
        <>
        <div className={`cuadro ${squareClass}`} style={styles} onClick={ () => handleEmpty(row, column) } ></div>
        </>
    )
}