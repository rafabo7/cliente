const MIN_DELAY = 1_000;
const RANDOM_DELAY = 2_000;

function fizz(int) {
    var randomDelay = Math.round(Math.random() * RANDOM_DELAY) + MIN_DELAY;

    function absurd(call) {

        setTimeout(() => {
            if (int % 3 === 0) {
              
                return call(true)

            } else return call(false)
        }, randomDelay);

    }

    return new Promise( (resolve)=>{
        absurd( (result) => resolve(result) )
    } )



}

// console.log(fizz(1))

let muchasPromesas = []

for (let i = 1; i < 50; i++) {
    
    muchasPromesas.push(
        fizz(i)

    )
}

Promise.all(muchasPromesas)
    .then( result => {
        result.forEach( (item, index) => {
            item 
                ? console.log('Fizz')
                : console.log(index+1)
        })
    } )

// const results = {};
// let nextToPrint = 1;

// function tryPrint() {
//     while (results[nextToPrint] !== undefined) {
//         if (results[nextToPrint]) {
//             console.log("fizz");
//         } else {
//             console.log(nextToPrint);
//         }
//         delete results[nextToPrint];
//         nextToPrint++;
//     }
// }

// for (let i = 1; i <= 25; i++) {
//     fizz(i).then(result => {
//         results[i] = result;
//         tryPrint();
//     });
// }