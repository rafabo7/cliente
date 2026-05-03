
Crea una aplicación en React que realice los siguientes apartados.

Si realizas la aplicación usando Redux podrás obtener hasta 10 puntos. Si no usas Redux
podrás obtener hasta 7 puntos.

Incluye `index.css` para los estilos de la aplicación.


Apartado 1
----------
Crea el componente `ListaNumeros`.  Dicho componente debe mostrar una lista de
números.  Cada número tendrá asignado un color de letra diferente, y deberá
mostrarse con el tamaño de fuente correspondiente a dicho número (si es un 20,
el tamaño de la fuente será `20px`).

La lista se generará de forma aleatoria al inicializar la aplicación llamando a la función `generarListaAleatoria`
de la librería `randomItems.js`

El HTML resultante deberá tener la siguiente estructura:
```html
<ul class="lista-numeros">
  <li class="lista-numeros__item" style="color: rgb(7, 181, 229); font-size: 16px;">16</li>
  <li class="lista-numeros__item" style="color: rgb(89, 38, 156); font-size: 22px;">22</li>
  <li class="lista-numeros__item" style="color: rgb(150, 4, 116); font-size: 39px;">39</li>
  <li class="lista-numeros__item" style="color: rgb(47, 213, 83); font-size: 35px;">35</li>
  <li class="lista-numeros__item" style="color: rgb(196, 69, 19); font-size: 42px;">42</li>
  <li class="lista-numeros__item" style="color: rgb(251, 156, 127); font-size: 33px;">33</li>
</ul>
```


Apartado 2
----------
Crea el componente `NuevoNumero`.  Dicho componente tendrá un slider que irá desde
`15` hasta `50`, un selector de color, y un botón "Añadir".  El usuario podrá seleccionar
un tamaño de fuente (mediante el slider) y un color (mediante el selector de
color).  Al hacer clic en el botón "Añadir", se añadirá un nuevo número a la
lista de números mostrada en el componente `ListaNumeros` con el tamaño y color inidicados
en el slider y el selector de color.

El HTML resultante deberá tener la siguiente estructura:
```html
<div class="nuevo-numero">

  <label class="nuevo-numero__label">
    Tamaño: 15
    <input class="nuevo-numero__input" min="15"
      max="50" type="range" value="15">
  </label>

  <label class="nuevo-numero__label">
    Color:
    <input
      class="nuevo-numero__input" type="color" value="#000000">
  </label>

  <button class="nuevo-numero__button">Añadir</button>

  </div>
```


Apartado 3
----------
Al pulsar en un número de la lista sus valores deberán cargarse en el componente `NuevoNumero`
