let celula = {
  tipo: 'eucariota',
  comida: true,
  tamaño: 3,

  mitosis(){

    let hijos = [ {...this}, {...this} ]
    let propPropias = Object.keys(this)
    for ( prop of propPropias ) {
        if ( prop != "mitosis" ) delete this[prop]
    }
    
    return hijos
  }

}

let [nuevaCel1, nuevaCel2] = celula.mitosis()
console.log({"Madre" : {celula}})

console.log({nuevaCel1}, {nuevaCel2})
console.log("**************")

let [ cel3, cel4 ] = nuevaCel2.mitosis()

console.log({"Madre" : {nuevaCel2}})

console.log({cel3}, {cel4})
