import './App.css'
import Formulary from './componenets/formulario'
import Record from './componenets/registro'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

 

  return (
    <>
    <Record />
    <div>
      <Formulary 
        Registrarse= "Registrarse"/>
    </div>
    </>
  )
}

export default App
