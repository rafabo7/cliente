function double(x) { return x*2 }
function add3(x) { return x+3 }

function doublePipe(...args){
    return function (n) {
        let result = n
        for (let i = 0; i < args.length; i++) {
            
            
            result = args[i](args[i](result))
            
        }
        return result
    }
}

let multiplyPerFourAndAddSix = doublePipe(double, add3)
console.log({"Final result" : multiplyPerFourAndAddSix(10)})