function buenosDias(hora){
    if ( hora >= 7 && hora <= 12 ) console.log("Buenos días")
    else if ( hora >= 13 && hora <= 20 ) console.log("Buenas tardes")
    else if ( hora >= 21 && hora <= 23 ) console.log("Buenas noches")
    else if ( hora >= 0 && hora <= 2 ) console.log("Buenas noches")
    else if ( hora >= 3 && hora <= 7 ) console.log("¿Qué haces despierto a estas horas?")
}

buenosDias(8)
buenosDias(13)
buenosDias(21)
buenosDias(4)