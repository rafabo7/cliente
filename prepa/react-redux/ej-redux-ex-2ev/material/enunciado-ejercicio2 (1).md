# Ejercicio 2

Crea una aplicación en React que realice los siguientes apartados.

Si realizas la aplicación usando Redux podrás obtener hasta 10 puntos. Si no usas Redux podrás obtener hasta 7 puntos.

Incluye `index.css` para los estilos de la aplicación.


### Apartado 1
Crea un componente `Square` que recibirá por props una fila, columna y un booleano que indique si está vacío. En el caso de estar vacío tendrá la clase CSS `cuadro empty`, en caso contrario tendrá sólo la clase `cuadro`.

El HTML resultante deberá tener la siguiente estructura:
```html
<div class="cuadro" style="grid-area: 1 / 1;"></div>
```

Donde `1 / 1` son la fila y columna recibidas por props.

### Apartado 2
Crea un componente `Grid`. El componente recibirá por props el número de filas y columnas y renderizará una cuadrícula de `Square` con el tamaño indicado. También debe incluir en props una propiedad empty con la posición de fila y columna del cuadrado vacío.

El HTML resultante deberá tener la siguiente estructura:
```html
<div class="grid-container" style="grid-template-columns: repeat(3, 40px); grid-template-rows: repeat(3, 40px);">
  <div class="cuadro" style="grid-area: 1 / 1;"></div>
  <div class="cuadro" style="grid-area: 1 / 2;"></div>
  <div class="cuadro" style="grid-area: 1 / 3;"></div>
  <div class="cuadro" style="grid-area: 2 / 1;"></div>
  <div class="cuadro" style="grid-area: 2 / 2;"></div>
  <div class="cuadro" style="grid-area: 2 / 3;"></div>
  <div class="cuadro" style="grid-area: 3 / 1;"></div>
  <div class="cuadro" style="grid-area: 3 / 2;"></div>
  <div class="cuadro empty" style="grid-area: 3 / 3;"></div>
</div>
```


### Apartado 3
Crea un formulario inicial `InitForm` que permita seleccionar el número de filas y columnas
de una cuadrícula mediante dos sliders. El formulario debe tener un botón de "Iniciar" que, al pulsarlo,
renderice el componente `Grid` con las filas y columnas seleccionadas. El cuadro vacío debe
situarse aleatoriamente usando la función `getRandomEmpty` de `utils.js`.

El valor inicial del formulario y la rejilla serña 4 filas y 5 columnas. Tendrá un mínimo de 3 y un máximo de 8 tanto en filas como en columnas.


### Apartado 4
Al pulsar sobre un cuadro adyacente al cuadro vacío, los dos cuadros deben intercambiarse de posición.
