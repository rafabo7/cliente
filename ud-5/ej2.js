function generadorID(len) {
    // First id, cannot be 0
    let currentId = 1
    // Maximum number of ids
    let max = 10**len
    
    return function () {
        // Testing de currentId, e.g. 999 must be asign, 1000 must throw an error
        if ( currentId === max ) throw new Error(`No IDs of length ${len} left`);

    
        let formatID = String(currentId).padStart(len, "0")
    
        currentId++

        return formatID

    }
}

let len2 = generadorID(2)
let len3 = generadorID(3)
let len4 = generadorID(4)

console.log('**************************************')
for ( let i = 0; i < 5; i++ ) {
    console.log(len2())
}
console.log('**************************************')

for ( let i = 0; i < 5; i++ ) {
    console.log(len3())
}
console.log('**************************************')

for ( let i = 0; i < 5; i++ ) {
    console.log(len4())
}

console.log('**************************************')
for ( let i = 0; i < 5; i++ ) {
    console.log(len2())
}
console.log('**************************************')

for ( let i = 0; i < 5; i++ ) {
    console.log(len3())
}
console.log('**************************************')

for ( let i = 0; i < 5; i++ ) {
    console.log(len4())
}

console.log('**************************************')
for ( let i = 0; i < 5; i++ ) {
    console.log(len2())
}
console.log('**************************************')

for ( let i = 0; i < 5; i++ ) {
    console.log(len3())
}
console.log('**************************************')

for ( let i = 0; i < 5; i++ ) {
    console.log(len4())
}