// Crea una función llamada fizz() que compruebe si un número es divisible por 3.
// Sin embargo, debe devolver ese resultado al cabo de un tiempo aleatorio entre 100 y 10.000 ms
// (puedes reducir este número mientras estás probando el ejercicio)
// Imprime los números del 1 al 300. Si fizz() devuelve false debes imprimir el número. Si
// fizz() devuelve true, debes imprimir “fizz” en lugar del número.
// Debes imprimir los números en orden pero tan rápido como puedas.

const MIN_DELAY = 1_000
const MAX_DELAY = 10_000

async function fizz(n) {
    const delay = Math.random() * ( MAX_DELAY - MIN_DELAY ) + MIN_DELAY
    
    return new Promise((resolve) => {
        setTimeout( () => resolve(n % 3 === 0 ? 'Fizz' : n) , delay)
    })
}

const LIMIT = 10
const num = []

for (let i = 1; i < LIMIT; i++) {
    num.push(fizz(i))
}

const result = await Promise.all(num)

console.log(result);






