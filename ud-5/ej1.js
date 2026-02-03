
// Funcion impura 
const MINIMUM = 15;
// function mergeValues(arrayOfIntegers) {
//     let element;
//     let sum = 0;
//     while(element = arrayOfIntegers.pop()) {
//         sum += element
//     }
//     sum = Math.max(sum, MINIMUM)
//     arrayOfIntegers.push(sum);
//     return arrayOfIntegers;
// }
// console.log("---------- Impura --------------")
// console.log(mergeValues([10,20,30,40])) // [100]
// console.log(mergeValues([1,2,3,4])) // [15] (MINIMUM)

// Función pura

// const NEW_MIN = 15



function pure_mergeValues(arr){

    let resultado = arr.reduce( (total, curr) => total+curr, 0 )

    return [ Math.max(resultado, MINIMUM) ]

}
console.log("---------- Pura --------------")
console.log(pure_mergeValues([10,20,30,40])) // [100]
console.log(pure_mergeValues([1,2,3,4])) // [15] (MINIMUM)
