class PreguntaClass {

    
    
    constructor( format ) {
        this._id = format.id
        this._texto = format.texto
        this._opciones = format.opciones
        this._respuestaCorrecta = format.respuestaCorrecta
    }

    

    responder(textoRespuesta) {
        if ( textoRespuesta == this._opciones[this._respuestaCorrecta] ) {
            return true
        } else return false
    }

    esCorrecta = (respuesta) => this.responder(respuesta)

    get opciones(){return this._opciones}
    get texto() { return this._texto}
    respuestaSeleccionada = (index) => this._opciones[index]




}


export default PreguntaClass;