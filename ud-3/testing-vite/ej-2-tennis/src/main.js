
import { iniciarJuego, juego, puntoJugador } from "./tennisUtils"

const buttonPlayerOne = document.querySelector('#punto-1')
const buttonPlayerTwo = document.querySelector('#punto-2')

const namePlayerOne = document.querySelector('.player-1 .name')
const scorePlayerOne = document.querySelector('.player-1 .score')
const juegosPlayerOne = document.querySelector('.player-1 .juegos')

const namePlayerTwo = document.querySelector('.player-2 .name')
const scorePlayerTwo = document.querySelector('.player-2 .score')
const juegosPlayerTwo = document.querySelector('.player-2 .juegos')

const initGame = document.querySelector('#inicio')

const scoreBoard = document.querySelector('#score-board')

initGame.addEventListener( 'click', () => {
  console.log('boton pulsado')
  iniciarJuego()
  namePlayerOne.textContent = juego[1].nombre
  namePlayerTwo.textContent = juego[2].nombre

  scorePlayerOne.textContent = juego[1].puntos
  scorePlayerTwo.textContent = juego[2].puntos

  
  juegosPlayerTwo.textContent = juego[2].juegos
  juegosPlayerOne.textContent = juego[1].juegos
  
} )

buttonPlayerOne.addEventListener('click', () => {
  puntoJugador(1)
  scorePlayerOne.textContent = juego[1].puntos
  scorePlayerTwo.textContent = juego[2].puntos

  
  juegosPlayerOne.textContent = juego[1].juegos
  juegosPlayerTwo.textContent = juego[2].juegos


})

buttonPlayerTwo.addEventListener('click', () => {
  puntoJugador(2)
  scorePlayerTwo.textContent = juego[2].puntos
  juegosPlayerOne.textContent = juego[1].juegos

  juegosPlayerTwo.textContent = juego[2].juegos
  scorePlayerOne.textContent = juego[1].puntos


})
