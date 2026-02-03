function dosSeries ( arr ) {
    const sorted = arr.sort( (a,b) => a-b )
    console.log(sorted)
    const mitad = Math.floor( arr.length / 2 )
    const serieMenor = sorted.slice(0, mitad )
    const serieMayor = sorted.slice( mitad )

    console.log("Mayores: ", serieMayor)
    console.log("Menores: ", serieMenor)

}

dosSeries( [ 99, 200, 50, 3, -3, -60, 10 ] )