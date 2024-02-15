import './App.css'
import Record from './componenets/Registro'
import Formulary from './componenets/Formulario'
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
