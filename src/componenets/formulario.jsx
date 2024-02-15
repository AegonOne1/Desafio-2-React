import { useState } from "react"
import { Button } from "react-bootstrap"


const Formulary = (props) => {

    const [RegisterData, setRegisterData] = useState({
        name: '',
        email: '',
        passWord: '',
        confirmPass: '',
    })

    return(
        <form>
            <input type="text" placeholder="Nombre" onChange={(event) => setRegisterData({...RegisterData, name: event.target.value})}/>
            <input type="text" placeholder="tuemail@ejemplo.com" onChange={(event) => setRegisterData({...RegisterData, email: event.target.value })}/>
            <input type="text" placeholder="Contraseña" onChange={(event) => setRegisterData({...RegisterData, passWord: event.target.value })}/>
            <input type="text" placeholder="Confirma tu contraseña" onChange={(event) => setRegisterData({...RegisterData, confirmPass: event.target.value })}/>
            <Button variant="primary">{props.Registrarse}</Button>
        </form>
    )
}

export default Formulary