import { useState } from "react"
import { Button } from "react-bootstrap"


const Formulary = (props) => {

    const [RegisterData, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: '',
    })

   const handleChange = (event) => {
        setRegisterData({...RegisterData, [event.target.name]: event.target.value})
   }

   const [error, setError] = useState(false)
   
   const handleSubmit = (event) => {
        event.preventDefault()

        const emailConfirm = /^[^\s@]+@[^@\s]+$/; //expresion utilizada para validad que almenos tenga un caracter antes y despues del @
        if(!emailConfirm.test(RegisterData.email)) {
            alert('Por favor, ingrese un correo electronico valido.')
            return
        }

        if (RegisterData.password !== RegisterData.confirmPass) {
            alert('Las contraseñas no coinciden. Porfavor, intentelo nuevamente')
            return
        }

        console.log('Datos del formulario:', RegisterData)
   }

    return(
        <form>
            <input type="text" name="name" placeholder="Nombre" onChange={handleChange}/>
            <input type="email" name="email" placeholder="tuemail@ejemplo.com" onChange={handleChange}/>
            <input type="text" name="password" placeholder="Contraseña" onChange={handleChange}/>
            <input type="text" name="confirmPass" placeholder="Confirma tu contraseña" onChange={handleChange}/>
            <Button type="submit" variant="primary" onSubmit={handleSubmit}>{props.Registrarse}</Button>
        </form>
    )
}

export default Formulary