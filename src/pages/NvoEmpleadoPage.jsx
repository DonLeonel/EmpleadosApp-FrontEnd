import { useFetch } from '../hooks/useFetch'
import { useForm } from '../hooks/useForm'
//import { useSendDataFetch } from '../helper/'
import style from '../styles/nuevoEmpleado.module.css'


const URL_GET_ALL_CIUDADES = 'https://localhost:7219/api/Secundario/getCiudades'
const URL_GET_ALL_CARGOS = 'https://localhost:7219/api/Secundario/getCargos'
const URL_SAVE_EMPLEADO = 'https://localhost:7219/api/Empleados/saveEmpleado'

const INITIAL_FORM = { nombre: '', apellido: '', dni: '', sucursal: '', cargo: '' }

export const NvoEmpleadoPage = () => {

    const { formState, onInputChange } = useForm(INITIAL_FORM)

    const { nombre, apellido, dni, sucursal, cargo } = formState

    const { data, error, loading } = useFetch(URL_GET_ALL_CIUDADES)
    const { data: data1, error: error1, loading: loading1 } = useFetch(URL_GET_ALL_CARGOS)

    const onSubmit = (event) => {
        event.preventDefault()

        //const { ok, error } = useSendDataFetch(URL_SAVE_EMPLEADO, formState)
        if (ok) {
            alert("Se guardo con exito el nuevo Empleado")
        }
        else {
            console.log(error)
        }
    }

    return (
        <div className='container'>
            <div className={style.contSubtitulo}>
                <h2 className='subtitulosPage'>Nuevo Empleado</h2>
            </div>
            <form className={style.formNvoEmp} onSubmit={onSubmit}>
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
                            value={sucursal}
                            onChange={onInputChange}
                            name='sucursal'
                        >
                            <option selected>seleccione</option>
                            {loading ? <option key={0} selected>Cargando...</option>
                                : error ? <option key={0}>Opciones no disponibles</option>
                                    : data.map(suc =>
                                        <option key={suc.id} value={suc.id}>{suc.nombre}</option>
                                    )}
                        </select>
                    </div>
                    <div className="col-4 md-3">
                        <label htmlFor="cargo">Cargo</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={cargo}
                            onChange={onInputChange}
                            name='cargo'
                        >
                            <option selected>seleccione</option>
                            {loading1 ? <option key={0} selected>Cargando...</option>
                                : error ? <option key={0}>Opciones no disponibles</option>
                                    : data1.map(cargo =>
                                        <option key={cargo.id} value={cargo.id}>{cargo.nombre}</option>
                                    )}
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <hr />
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>

    )
}
