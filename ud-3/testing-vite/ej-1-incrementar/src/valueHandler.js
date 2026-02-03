import { incrementar, reset } from "./miCounter"

function onIncrementar(par) {
    console.log({par})
    par.textContent = incrementar(parseInt(par.textContent))
}

function onReset(par) {

    console.log({par})


    par.textContent = reset()
    
}

export {
    onIncrementar, onReset
}