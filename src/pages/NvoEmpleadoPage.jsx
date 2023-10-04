import { useFetch } from '../hooks/useFetch'
import { useForm } from '../hooks/useForm'
//import { useSendDataFetch } from '../helper/'

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
        <>
            <h2>Nuevo Empleado</h2>
            {(error || error1) ? console.log(error1, error)
                : <div className='NvoEmpl'>
                    <form onSubmit={onSubmit}>
                        <div className="col-6 md-3">
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
                        <br />
                        <div className="col-6 md-3">
                            <label htmlFor="apellido" className="form-label">Apellido</label>
                            <input type="text"
                                className="form-control"
                                name="apellido"
                                placeholder='apellido'
                                value={apellido}
                                onChange={onInputChange}
                            />
                        </div>
                        <br />
                        <div className="col-6 md-3">
                            <label htmlFor="dni" className="form-label">Dni</label>
                            <input type="text"
                                className="form-control"
                                name="dni"
                                placeholder='dni'
                                value={dni}
                                onChange={onInputChange}
                            />
                        </div>
                        <br />
                        <div className="col-6 md-3">
                            <label htmlFor="sucursal">Sucursal</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                value={sucursal}
                                onChange={onInputChange}
                                name='sucursal'
                            >
                                <option selected>seleccione</option>
                                {loading ? <option selected>Cargando...</option>
                                    : data.map(suc =>
                                        <option key={suc.id} value={suc.id}>{suc.nombre}</option>
                                    )}
                            </select>
                        </div>
                        <br />
                        <div className="col-6 md-3">
                            <label htmlFor="cargo">Cargo</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                value={cargo}
                                onChange={onInputChange}
                                name='cargo'
                            >
                                <option selected>seleccione</option>
                                {loading1 ? <option selected>Cargando...</option>
                                    : data1.map(cargo =>
                                        <option key={cargo.id} value={cargo.id}>{cargo.nombre}</option>
                                    )}
                            </select>
                        </div>
                        <br />
                        <hr />
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            }
        </>
    )
}
