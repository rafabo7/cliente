import Pregunta from './Plantillas ejercicio 1 - Mañanas/Pregunta.js';
import PreguntaClass from "./modules/pregunta";

import obtenerTest from './Plantillas ejercicio 1 - Mañanas/tests.js'

// ejemplo formato
let pregunta = {
  id: 1,
  texto: '¿Cuál es la capital de Francia?',
  opciones: ['Berlín', 'Madrid', 'París', 'Roma'],
  respuestaCorrecta: 2
}

// asignación de clase propia para objetos de clase Pregunta
const p = PreguntaClass

// let arr = new p (obtenerTest())
// console.log(arr)




// clase propporcionada por profesor, tambien acepta objetos como formato
// let plantilla = new Pregunta(pregunta)

//obtenerTest()
// "devuelve un array de objetos con datos de preguntas aleatorio." => ¿hay que pasarle algún argumento? ¿signatura?
// archivo minificado, no se pudo extraer signatura




// creación de pregunta de prueba
let preguntaFormat = new p(pregunta)

// nodos dom para control
const textoPregunta = document.querySelector('#pregunta #texto')
const opciones = document.querySelectorAll('#opciones .opcion')

const anteriorBtn = document.querySelector('#anterior')
const siguienteBtn = document.querySelector('#siguiente')


// funcion = cambia el texto de los elementos .opcion
function getOpciones( opciones, opcionesNodes ){
  opcionesNodes.forEach( (item, index) => item.textContent = opciones[index] )
}

// imprime objetos de clase Pregunta
function visualizarPregunta( pregunta ){

  textoPregunta.textContent = pregunta.texto
  getOpciones( pregunta.opciones, opciones)


}

visualizarPregunta(preguntaFormat)