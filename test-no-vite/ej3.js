function lazyMultiply( n, m ) {

    if( arguments.length == 1 ) {
        return function(m) {
            return n*m
        }
        
    } else if ( arguments.length == 2) {
        return n*m

    } else throw new Error("¿Qué crees que estás haciendo?")

}

console.log(lazyMultiply(2,3))
console.log(lazyMultiply(2,6))
const perTwo = lazyMultiply(2)
const perFive = lazyMultiply(5)

console.log({"2perTwo" : perTwo(2)})
console.log({"3perTwo" : perTwo(3)})

console.log({"3perFive" : perFive(3)})
console.log({"4perFive" : perFive(4)})