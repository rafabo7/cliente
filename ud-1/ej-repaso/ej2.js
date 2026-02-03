function limones( input ) {
    if ((typeof input !== "number")) {
        console.log("Debe introducir un número, si no no hay limones")

    }

    for( let i = 1; i <= input; i++ ) {
        if ( i == 1 ) console.log(`${i} limón y medio limón`)
            else if (i == input) { 
        console.log( `${i} LIMONES Y MEDIO LIMÓN!!!` )
        } else { console.log(`${i} limones y medio limón`) }
    }
}

limones(4)