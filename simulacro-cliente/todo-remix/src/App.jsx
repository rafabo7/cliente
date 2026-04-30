
import './App.css'
import Filtros from './redux/components/Filtros'
import FormTarea from './redux/components/FormTarea'
import TodoList from './redux/components/TodoList'

function App() {
  

  return (
    <>
     <h1>Lista de Tareas</h1>
     <FormTarea/>
     <Filtros />
     <TodoList/>
    </>
  )
}

export default App
