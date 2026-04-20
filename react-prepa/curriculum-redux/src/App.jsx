

import './App.css'
import FormExperience from './components/FormExperience'
import Display from './components/Display'
import List from './components/List'


function App() {


  return (
    <>

      <section className="form-section">

        <List />

        <FormExperience />

      </section>

      <section className="display-section">
        
        <Display   />

      </section>
    </>
  )
}

export default App
