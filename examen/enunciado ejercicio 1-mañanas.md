# Ejercicio 1 (tardes)

Vas a crear una aplicación para hacer cuestionarios de tipo test.

Debes crear un proyecto Vite con el archivo `index.html` que se proporciona en el repositorio. Tu proyecto debe importar los estilos de `style.css`.

### Entrega
Debes subir un archivo comprimido (.zip) con todo el proyecto Vite, exceptuando `node_modules` y `dist`.


## Apartado 1 (3 puntos)

Las preguntas tienen el siguiente formato. **Siempre tendrán cuatro opciones**:

```js
pregunta = {
  id: 1,
  texto: '¿Cuál es la capital de Francia?',
  opciones: ['Berlín', 'Madrid', 'París', 'Roma'],
  respuestaCorrecta: 2
}
```

Crea una clase `Pregunta`. La clase debe tener los siguientes métodos y propiedades

- Constructor: recibe un objeto con el formato indicado que contiene la pregunta
- `responder(textoRespuesta)`: recibe el texto de la respuesta dada por el usuario y devuelve `true` si es correcta o `false` si no lo es
- `esCorrecta`: Propiedad que devuelve si la pregunta ha sido respondida correctamente (true/false). Si no ha sido respondida, devuelve false.
- `opciones`: Propiedad que devuelve un array con las opciones de respuesta
- `texto`: Propiedad que devuelve el texto de la pregunta
- `respuestaSeleccionada`: Propiedad que devuelve el texto de la respuesta seleccionada por el usuario. Si no ha respondido, devuelve null.

La clase debe estar en un módulo y debe exportarse por defecto.


## Apartado 2 (3 puntos)

Si no has hecho el apartado 1, puedes importar la clase `Pregunta` desde el módulo `Pregunta.js` proporcionado en las plantillas.

Crea una función `visualizarPregunta` que, dado un objeto de la clase `Pregunta`, la muestre en la página web. El HTML final debe tener la siguiente estructura:


```html
<div id="app">

  <h1>Cuestionario</h1>

  <div id="pregunta">
    <div id="texto">¿De qué color es el caballo blanco de Santiago?</div>
    <div id="opciones">
      <div id="opcion1" class="opcion">Opcion 1</div>
      <div id="opcion2" class="opcion">Opcion 2</div>
      <div id="opcion3" class="opcion">Opcion 3</div>
      <div id="opcion4" class="opcion">Opcion 4</div>
    </div>
  </div>

  <div id="botones">
    <button id="anterior">Anterior</button>
    <button id="siguiente">Siguiente</button>
  </div>

</div>
```

## Apartado 3 (4 puntos)

Utiliza el módulo `lib/tests.js` para hacer un cuestionario completo con varias preguntas.
El módulo exporta una función `obtenerTest()` (no por defecto) que devuelve un array de objetos con datos de preguntas aleatorio.

Al entrar en la página se debe mostrar la primera pregunta del cuestionario.

Programa los botones "Anterior" y "Siguiente" para navegar entre las preguntas del cuestionario. Al hacer click en una opción, se debe registrar la respuesta en el objeto Cuestionario creado en el apartado 1.

- Al pulsar una opción, esta debe resaltarse para indicar que ha sido seleccionada.
- Las preguntas se pueden contestar varias veces, por lo que al navegar entre preguntas se debe mostrar la opción seleccionada previamente (si la hay).
- Los botones sólo deben funcionar cuando haya una pregunta anterior o siguiente respectivamente. No hace falta ocultarlos ni deshabilitarlos.
- Al llegar a la última pregunta, el botón "Siguiente" debe cambiar su texto a "Finalizar" y al hacer click en él se debe mostrar una alerta con la puntuación obtenida (número de respuestas correctas).

## Criterios de evaluación

- El programa es correcto, realiza la función que se solicita en el enunciado
- Se han utilizado estructuras del lenguaje adecuadas: bucles, condicionales, operadores, etc.
- Se ha estructurado correctamente el código utilizando módulos
- Se han utilizado variables y constantes de forma adecuada
- Se utilizan correctamente y cuando corresponda los tipos de datos y objetos predefinidos del lenguaje (Arrays, objetos planos, Map, Set, etc.)
- Se han utilizado funciones para estructurar el código, definiendo y utilizando parámetros y valores de respuesta de forma adecuada
- El programa es lo más sencillo posible para realizar su función.
- No existe código repetido: se han extraído los comportamientos comunes a funciones y se ha intentado hacer el código genérico.
