# Ejercicio 1 - Primera Evaluación

**Debes hacer este ejercicio únicamente si tienes suspendida la primera evaluación.**

Crea un cronómetro que permita iniciar, pausar y reiniciar el tiempo.  El
cronómetro debe mostrar el tiempo transcurrido en formato de minutos, segundos y
centésimas (mm:ss:cc), sin contar las horas.  Además, el cronómetro debe ser
capaz de guardar los tiempos registrados en una lista y mostrar un historial de
los tiempos guardados.

El botón de iniciar / pausar debe ser el mismo, cambiando el texto.  Además,
reiniciar sólo estará habilitado si el cronómetro está pausado.

Todos los elementos HTML del cronómetro deben crearse dinámicamente desde
JavaScript (no deben estar escritos en el HTML).

Debes usar la función `formatTime` del módulo `utils.js` para formatear el
tiempo transcurrido.  Esta función toma un número de milisegundos y devuelve una
cadena con el formato `mm:ss:cc`.

El HTML generado debe tener la siguiente estructura:
```html
<div class="container">
  <div class="time">00:04:91</div>
  <div class="controls">
    <button id="start-pause">Iniciar</button>
    <button id="reset">Reiniciar</button>
    <button id="save">Guardar</button>
  </div>
  <div class="history">
    <div class="history-title">Historial de tiempos guardados:</div>
    <ol id="history-list">
      <li>00:01:12</li>
      <li>00:03:41</li>
    </ol>
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
 - Se maneja correctamente el DOM y los eventos para crear y controlar los elementos de la interfaz de usuario.
