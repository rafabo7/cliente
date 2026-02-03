function updatePlayer(){

}

function initBoard(){
    console.log('boton pulsado')
    iniciarJuego()
    namePlayerOne.textContent = juego[1].nombre
    namePlayerTwo.textContent = juego[2].nombre

    scorePlayerOne.textContent = juego[1].puntos
    scorePlayerTwo.textContent = juego[2].puntos
}

export {
    initBoard
}