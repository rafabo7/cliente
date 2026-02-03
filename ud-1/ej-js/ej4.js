function moda(arr) {
    const valores = new Set(arr)
    console.log(arr)
    let modaTemp
    let countTemp = 0

    for ( valor of valores ) {


        
        let count = 0

        for ( item of arr ) {   
            
            if ( item == valor ) count++
        }

        if ( count > countTemp ){
            modaTemp = valor
            countTemp = count
        }

    }

    console.log(`La moda es ${modaTemp}, aparece ${countTemp} veces.`)



}

function random20() {
    const arr = []
    for ( let i = 0; i < 20; i++){
        arr.push( Math.floor( Math.random()*10 ) )
    }
    return arr
}

moda( random20() )