
import { onIncrementar, onReset } from "./valueHandler"

const botonIncrementar = document.querySelector('#incrementar')
const botonReset = document.querySelector('#reset')
const par = document.querySelector('#currentValue')

botonIncrementar.onclick = () => onIncrementar(par)
botonReset.onclick = () => onReset(par)