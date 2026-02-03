// Gatos: hambre, cansancio, felicidad; alimentar(), jugar(), dormir(), verEstado(), pasoDelTiempo()?
//hambre y cansancio incrementan con el tiempo y decrementan con comer() y dormir()
// felicidad decrementa con el tiempo y incrementa con jugar()
// incluir un poco de aleatoriedad

class Gato {
    constructor(nombre){
        this.nombre = nombre
        this.sueño = 0,
        this.hambre = 80,
        this.felicidad = 0
    }

    alimentar(){

        let nuevaHambre
        if ( this.hambre > 0 ) {
            nuevaHambre = Math.floor(Math.random()*10)+1


            if ( (this.hambre - nuevaHambre) <= 0 ) {

                this.hambre = 0
            } else this.hambre -= nuevaHambre


        } else return `¡${this.nombre} no tiene nada de hambre!`


        return `Has alimentado a ${this.nombre}, ahora tiene ${this.hambre}ptos de hambre (-${nuevaHambre}) `
    }

    dormir(){

        let nuevoSueño
        if ( this.sueño > 0 ) {
            nuevoSueño = Math.floor(Math.random()*10)+1

            if ( (this.sueño - nuevoSueño) <= 0 ) {
                this.sueño = 0
            } else this.sueño -= nuevoSueño

        } else return `¡${this.nombre} no tiene nada de sueño!`

        return `${this.nombre} ha dormido, ahora tiene ${this.sueño}ptos de sueño (-${nuevoSueño}) `
    }

    jugar(){
        if ( this.sueño < 95 && this.hambre < 95 ) {

            let nuevaFelicidad = Math.floor(Math.random()*10)+1

            this.felicidad += nuevaFelicidad
            this.hambre += Math.floor(Math.random()*10)+1
            this.sueño += Math.floor(Math.random()*10)+1

            return `${this.nombre} está contento, tiene ${this.felicidad}ptos de felicidad (+${nuevaFelicidad}). Ahora tiene ${this.sueño}ptos de sueño y ${this.hambre}ptos de hambre `

        } else return `${this.nombre} está demasiado cansado para jugar...`
    }

    estado(){
        return `
        Este es el gato: ${this.nombre}
        Tiene ${this.hambre}ptos de hambre,
        ${this.sueño}ptos de sueño y 
        ${this.felicidad}ptos de felicidad
        `
    }

}


export {
    Gato
}