import './App.css';
import React, { useState } from 'react';
import Record from './componenets/Registro';
import Formulary from './componenets/Formulario';
import ConfirmarFormulario from './componenets/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

 

  return (
    <>
    <Record />
    <div>
      <Formulary
        Registrarse="Registrarse"
      />
      <ConfirmarFormulario  />
    </div>
  </>
  )
}

export default App
