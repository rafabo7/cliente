import { Gato } from "./gato.mjs";

let pancho = new Gato('Pancho')
// console.log(pancho.alimentar())

for (let i = 0; i < 1; i++) {
    console.log('**********************************')
    console.log(pancho.estado())
    console.log(pancho.jugar())
    console.log(pancho.jugar())
    console.log(pancho.jugar())
    console.log(pancho.alimentar())
    console.log(pancho.dormir())
    console.log(pancho.alimentar())
    console.log(pancho.dormir())
    console.log(pancho.alimentar())
    console.log(pancho.dormir())
    console.log(pancho.jugar())
    console.log(pancho.estado())
    console.log('**********************************')
    
}