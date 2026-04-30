# 🧩 Ejercicio React + Redux (Duración estimada: 1h 30min)

## 📌 Objetivo

Desarrollar una pequeña aplicación en React que gestione una **lista de tareas con prioridades**, utilizando:

- Estado global con Redux
- Estado local en componentes
- Hooks básicos: `useState`, `useEffect` (opcional), `useRef` (opcional)

---

## 🧠 Descripción

Debes crear una aplicación donde el usuario pueda:

1. Añadir tareas con:
   - Texto (string)
   - Prioridad (`baja`, `media`, `alta`)
2. Marcar tareas como completadas
3. Filtrar tareas por estado:
   - Todas
   - Completadas
   - Pendientes
4. Eliminar tareas

---

## 🗂️ Estructura de datos

Cada tarea debe tener esta forma:

```js
{
  id: number,
  texto: string,
  prioridad: "baja" | "media" | "alta",
  completada: boolean
}

## Html esperado
<div class="app">
  <h1>Lista de Tareas</h1>

  <div class="formulario">
    <input type="text" placeholder="Nueva tarea..." />
    
    <select>
      <option value="baja">Baja</option>
      <option value="media">Media</option>
      <option value="alta">Alta</option>
    </select>

    <button>Añadir</button>
  </div>

  <div class="filtros">
    <button>Todos</button>
    <button>Pendientes</button>
    <button>Completadas</button>
  </div>

  <ul class="lista">
    <li class="tarea">
      <span class="texto">Comprar pan</span>
      <span class="prioridad alta">Alta</span>

      <button>✔</button>
      <button>🗑</button>
    </li>
  </ul>
</div>