import { useState } from "react"
import { Button } from "react-bootstrap"
import ConfirmarFormulario from "./Alert"

const Formulary = (props) => {

    const [RegisterData, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: '',
    })

    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMesage] = useState('')

   const handleChange = (event) => {
        setRegisterData({...RegisterData, [event.target.name]: event.target.value})
   }
   
   const handleSubmit = (event) => {
        event.preventDefault()

        const emailConfirm = /^[^\s@]+@[^@\s]+$/; //expresion utilizada para validad que almenos tenga un caracter antes y despues del @
        if(!emailConfirm.test(RegisterData.email)) {
            setErrorMessage('Por favor, Utilice un email valido')
            setSuccessMesage('')
            return
        }

        if (RegisterData.password !== RegisterData.confirmPass) {
            setErrorMessage('Las contraseñas no coinciden. Porfavor, intentelo nuevamente')
            setSuccessMesage('')
            return
        }

        setSuccessMesage('!Registro Exitoso')
        setErrorMessage('')
        // console.log('Datos del formulario:', RegisterData)

   }

    return(
        <div className='formulario'>
            <form onSubmit={handleSubmit} className="columna">
                <input className="inputsClass" type="text" name="name" placeholder="Nombre" onChange={handleChange}/>
                <input className="inputsClass" type="email" name="email" placeholder="tuemail@ejemplo.com" onChange={handleChange}/>
                <input className="inputsClass" type="text" name="password" placeholder="Contraseña" onChange={handleChange}/>
                <input className="inputsClass" type="text" name="confirmPass" placeholder="Confirma tu contraseña" onChange={handleChange}/>
                <Button className="buttonClass" type="submit" variant="primary">{props.Registrarse}</Button>
            </form>
            <ConfirmarFormulario errorMessage={errorMessage} successMessage={successMessage} />
        </div>
    )
}

export default Formulary