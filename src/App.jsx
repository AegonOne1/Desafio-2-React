import './App.css';
import Record from './componenets/Registro';
import Formulary from './componenets/Formulario';
import ConfirmarFormulario from './componenets/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

 

  return (
    <div className='formBody'>
    <Record />
      
        <Formulary Registrarse="Registrarse"/>
        <ConfirmarFormulario  />
      
    </div>
  )
}

export default App
