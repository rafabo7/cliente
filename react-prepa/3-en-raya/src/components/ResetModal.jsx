import { useDispatch, useSelector } from "react-redux"
import { selectGameActive, resetGame } from "../redux/juegoSlice"
import { useRef } from "react"

export default function ResetModal() {

    const dispatch = useDispatch()
    const isGameActive = useSelector(selectGameActive)
    const dialogRef = useRef(null)

    function handleOpen() {
        dialogRef.current.showModal()
    }

    function handleCancel() {
        dialogRef.current.close()
    }

    function handleConfirm() {
        dispatch(resetGame())
        dialogRef.current.close()
    }

    return (
        <>

            <button
                disabled={!isGameActive}
                onClick={handleOpen}
            >
                Reset Game
            </button>

            <dialog
                ref={dialogRef}

            >
                <p>¿Quieres reiniciar el juego?</p>

                <button
                    onClick={handleCancel}
                >✖️
                </button>
                <button
                    onClick={handleConfirm}
                >✔️</button>
            </dialog>



        </>
    )
}