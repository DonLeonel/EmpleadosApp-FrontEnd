import { useState } from 'react'
import { useForm } from '../hooks/useForm'
import { NavLink, useNavigate } from 'react-router-dom'

const URL_LOGIN = 'https://localhost:7219/api/Credenciales/log';
const INITIAL_FORM = { usuario: '', contrasenia: '' }

export const LoginPage = () => {

    const Navigate = useNavigate();
    const { formState, onInputChange } = useForm(INITIAL_FORM)
    const [cookies, setCookies] = useState({
        usuario: '',
        avatar: '',
        log: false
    })

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
        sendDataFetch()
    }
    
    const { usuario, contrasenia } = formState

    const sendDataFetch = async () => {
        try {
            let response = await fetch(URL_LOGIN, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formState)
            })

            if (response.ok) {
                let data = await response.json();
                const { usuario, avatar } = data
                setCookies({
                    usuario,
                    avatar,
                    log: true
                })
                alert('Bienvenido ' + usuario + '.')
                navigate.navigate("/dashboard")
            }
            else {
                alert("Contraseña y/o Usuario incorrecto!")
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div id='contPrincipal' className='container'>
                <div className='col-auto'>
                    <label htmlFor="nombreUsuario"> Ingrese Usuario</label>
                    <input
                        className='form-control'
                        type="text"
                        placeholder='usuario'
                        name='usuario'
                        value={usuario}
                        onChange={onInputChange}
                    />
                </div>
                <br />
                <div className='col-auto'>
                    <label htmlFor="contracenia">Ingrese Contraseña</label>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='contraseña'
                        name='contrasenia'
                        value={contrasenia}
                        onChange={onInputChange}
                    />
                </div>
                <br />
                <NavLink to='/recuperarPass' className="nav-link active" aria-current="page" href="#">Olvidaste tu Contraseña?</NavLink>
                <hr />
                <div className='container'>
                    <button className='btn btn-primary'>Ingresar</button>
                </div>
                <br />
                <div className='container'>
                    <button
                        className='btn btn-secondary'
                        onClick={() => Navigate('/registrarse')}
                    >Registrarse</button>
                </div>
            </div>
        </form>
    )
}
