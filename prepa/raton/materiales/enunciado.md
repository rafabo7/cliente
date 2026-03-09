# Ejercicio 2 - Segunda Evaluación

**Debes hacer este ejercicio únicamente si tienes suspendida la segunda evaluación.**

Crea un proyecto React y Redux que implemente lo siguiente:

Habrá una cuadrícula de 5x5 casillas. Al pulsar una casilla esta cambiará de color (eliminándole la clase "bloqueado")

Al pulsar el botón comenzar, se elegirá una casilla aleatoria y se le pondrá la clase "raton", que muestra la imagen de un ratón en su interior. Al mismo tiempo se pondrá una casilla con la clase "meta", que muestra la imagen de un queso.

Si no hay al menos dos casillas desbloqueadas, el botón comenzar no estará habilitado.

Mientras el juego está activo el botón comenzar estará deshabilitado. Tampoco sucederá nada si se pulsa una casilla bloqueada (tendrás que recargar la página para volver a jugar)

Debes utilizar la función `elegirDosDistintas` del módulo `utils.js` para elegir aleatoriamente las casillas de ratón y queso. Esta función toma un array de objetos con las posiciones de las casillas desbloqueadas y devuelve dos objetos distintos elegidos aleatoriamente.

Ejemplo:
```javascript
const casillasDesbloqueadas = [
  { row: 0, col: 1 },
  { row: 1, col: 3 },
  { row: 2, col: 2 },
];
const [raton, queso] = elegirDosDistintas(casillasDesbloqueadas);
console.log(raton); // { row: 1, col: 3 }
console.log(queso); // { row: 0, col: 1 }
```

El HTML generado debe tener la siguiente estructura:
```html
<div id="root">
  <div class="container">
    <h1>Juego del Ratón y Queso</h1><button class="comenzar-btn" disabled="">Comenzar</button>
    <div class="grid">
      <div class="cell bloqueado"></div>
      <div class="cell bloqueado"></div>
      <div class="cell bloqueado"></div>
      <div class="cell"></div>
      <div class="cell bloqueado"></div>
      <div class="cell bloqueado"></div>
      <div class="cell bloqueado"></div>
      <div class="cell bloqueado"></div>
      <div class="cell">🧀</div>
      <div class="cell"></div>
      <div class="cell bloqueado"></div>
      <div class="cell bloqueado"></div>
      <div class="cell">🐭</div>
      <div class="cell"></div>
      <div class="cell bloqueado"></div>
      <div class="cell bloqueado"></div>
      <div class="cell bloqueado"></div>
      <div class="cell bloqueado"></div>
      <div class="cell bloqueado"></div>
      <div class="cell bloqueado"></div>
      <div class="cell bloqueado"></div>
      <div class="cell bloqueado"></div>
      <div class="cell bloqueado"></div>
      <div class="cell bloqueado"></div>
      <div class="cell bloqueado"></div>
    </div>
  </div>
</div>
```

## Criterios de evaluación

- El programa es correcto, realiza la función que se solicita en el enunciado
- Se han utilizado estructuras del lenguaje adecuadas: bucles, condicionales, operadores, etc.
- Se ha estructurado correctamente el código utilizando módulos
- Se han utilizado variables y constantes de forma adecuada
- Se utilizan correctamente y cuando corresponda los tipos de datos y objetos predefinidos del lenguaje (Arrays, objetos planos, Map, Set, etc.)
- Se han utilizado funciones para estructurar el código, definiendo y utilizando parámetros y valores de respuesta de forma adecuada
- El programa es lo más sencillo posible para realizar su función.
- No existe código repetido: se han extraído los comportamientos comunes a funciones y se ha intentado hacer el código genérico.
- Se han utilizado correctamente las funciones de React
- La distribución de la aplicación en componentes es adecuada.
- Se ha programado la aplicación utilizando React y Redux toolkit
- El diseño de los stores, actions y reducers es correcto.
- Se genera el HTML solicitado
