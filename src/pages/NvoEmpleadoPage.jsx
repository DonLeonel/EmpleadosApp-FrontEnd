import { useState } from 'react'
import { useFetch, useForm } from '../hooks/index'
import style from '../styles/nuevoEmpleado.module.css'

const URL_GET_ALL_CIUDADES = 'https://localhost:7219/api/Secundario/getCiudades'
const URL_GET_ALL_CARGOS = 'https://localhost:7219/api/Secundario/getCargos'
const URL_SAVE_EMPLEADO = 'https://localhost:7219/api/Empleados/saveEmpleado'

const INITIAL_FORM = { nombre: '', apellido: '', dni: '', sucursalID: '', cargoID: '' }

export const NvoEmpleadoPage = () => {

    const { formState, onInputChange } = useForm(INITIAL_FORM)
    const { nombre, apellido, dni, sucursalID, cargoID } = formState
    const { data, error, loading } = useFetch(URL_GET_ALL_CIUDADES)
    const { data: data1, error: error1, loading: loading1 } = useFetch(URL_GET_ALL_CARGOS)
    //const { submit } = usePostData(URL_SAVE_EMPLEADO, formState)

    const [errorSubmit, setErrorSubmit] = useState(null);
    const [ok, setOk] = useState(false);

    const handlerSubmit = async (event) => {
        event.preventDefault()
        submit();
        ok ? alert("Se guardo con éxito el nuevo Empleado")
            : console.log(errorSubmit);
    }

    const submit = async () => {
        try {
            const response = await fetch(URL_SAVE_EMPLEADO, {
                method: "POST",
                body: JSON.stringify(formState),
                "Content-Type": "application/json",
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                // setOk(true)
                // setErrorSubmit(null)
            } else {
                setErrorSubmit(new Error(response.statusText));
            }

        } catch (err) {
            setErrorSubmit(err);
        }
    }

    return (
        <div className='container'>
            <div className={style.contSubtitulo}>
                <h2 className='subtitulosPage'>Nuevo Empleado</h2>
            </div>
            <form className={style.formNvoEmp} onSubmit={handlerSubmit}>
                <div className='row'>
                    <div className="col-4 md-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            placeholder='nombre'
                            value={nombre}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="col-4 md-3">
                        <label htmlFor="apellido" className="form-label">Apellido</label>
                        <input type="text"
                            className="form-control"
                            name="apellido"
                            placeholder='apellido'
                            value={apellido}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="col-4 md-3">
                        <label htmlFor="dni" className="form-label">Dni</label>
                        <input type="text"
                            className="form-control"
                            name="dni"
                            placeholder='dni'
                            value={dni}
                            onChange={onInputChange}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-4 md-3">
                        <label htmlFor="sucursal">Sucursal</label>
                        <select                                                        
                            className="form-select"
                            aria-label="Default select example"
                            value={sucursalID}
                            onChange={onInputChange}
                            name='sucursalID'
                        >
                            <option key={2} selected>seleccione</option>
                            {loading ? <option key={0} >Cargando...</option>
                                : error ? <option key={0}>Opciones no disponibles</option>
                                    : data.map(suc =>
                                        <option key={suc.sucursalID} value={suc.sucursalID}>{suc.nombre}</option>
                                    )}
                        </select>
                    </div>
                    <div className="col-4 md-3">
                        <label htmlFor="cargo">Cargo</label>
                        <select                            
                            className="form-select"
                            aria-label="Default select example"
                            value={cargoID}
                            onChange={onInputChange}
                            name='cargoID'
                        >
                            <option key={1} selected>seleccione</option>
                            {loading1 ? <option key={8} >Cargando...</option>
                                : error1 ? <option key={0}>Opciones no disponibles</option>
                                    : data1.map(cargo =>
                                        <option key={cargo.cargoID} value={cargo.cargoID}>{cargo.nombre}</option>
                                    )}
                        </select>
                    </div>
                </div>
                <hr className='hr' />
                <div className='row contBtnEnviar'>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>

    )
}
