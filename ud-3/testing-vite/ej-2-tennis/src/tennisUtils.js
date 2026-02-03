
let juego;

function iniciarJuego() {
    // Creación de dos perfiles de jugador y un marcador para un partido de un juego
    console.log('juego iniciado')

    juego =  {
        
        1: {
            nombre: "player-1",
            puntos: 0,
            juegos: 0,
            winner: false
        },
        2: {
            nombre: "player-2",
            puntos: 0,
            juegos: 0,
            winner: false
        },
        state: "playing"
        
    }

}




const sistemaPuntos = [ 0, 10, 15, 30, 40, 'Deuce', 'Ventaja' ]


function puntoJugador(jugador) {

     //Check for started game
    if (!juego) {
        throw new Error("El juego no ha empezado");
    }

    // Check for valid player
    if (jugador != 1 && jugador != 2) {
        throw new Error("Jugador invalido");
    }

    //Check for unfinished game
    if (juego.state == "game over") {
        throw new Error("El juego ha terminado");
    }

   

    let contrincante;
    
    if(jugador == 1) {
        jugador = juego[1]
        contrincante = juego[2] 
        
        
    } else {
        jugador = juego[2]
        contrincante = juego[1] 
        }

    let ptosIndex = sistemaPuntos.indexOf(jugador.puntos)

    

    if (jugador.puntos <= 40) {
        jugador.puntos = sistemaPuntos[ptosIndex+1]
        


        
    } 
    
    if ( 
        (
            jugador.puntos == sistemaPuntos[4] && contrincante.puntos == sistemaPuntos[4]
        ) || 
        ( 
            jugador.puntos == sistemaPuntos[5] && contrincante.puntos == sistemaPuntos[6] 
        )) {
        jugador.puntos = sistemaPuntos[5]
        contrincante.puntos = sistemaPuntos[5]
    }  else if ( jugador.puntos == sistemaPuntos[5] && contrincante.puntos == sistemaPuntos[5]) {
        jugador.puntos = sistemaPuntos[6]
        
    }  else if ( jugador.puntos == sistemaPuntos[6] ) {
        jugador.puntos = sistemaPuntos[0]
        contrincante.puntos = sistemaPuntos[0]

        jugador.juegos +=1
    } 

    if ( jugador.juegos >= 2 ) {
        juego.state = "game over"
    }


    console.log(jugador.nombre)
        console.log(jugador.puntos)
        console.log(contrincante.nombre)
        console.log(contrincante.puntos)





    


}

function resultado(){

}

export {
    iniciarJuego, puntoJugador, resultado, juego
}