import { useFetch } from '../hooks/useFetch'
import { useForm } from '../hooks/useForm'
//import { useSendDataFetch } from '../helper/'
import style from '../styles/nuevaSucursal.module.css'

const URL_GET_ALL_CIUDADES = 'https://localhost:7219/api/Secundario/getCiudades'
const INITIAL_FORM = { nombre: '', ciudad: '' }

export const NvaSucursalPage = () => {

  const { formState, onInputChange } = useForm(INITIAL_FORM)

  const { nombre, ciudad } = formState
  const { data, error, loading } = useFetch(URL_GET_ALL_CIUDADES)

  const submit = () => {
    return 'nada'
  }

  return (
    <div className='container'>
      <div className={style.contSubtitulo}>
        <h2 className='subtitulosPage'>Nueva sucursal</h2>
      </div>
      <form onSubmit={submit} className={style.formNvaSucu}>
        <div className={`${style.pading} row`}>
          <div className="col-6 md-3">
            <label htmlFor="nombre" className="form-label">Nombre de la Sucursal</label>
            <input
              id='nombre'
              type="text"
              className="form-control"
              name="nombre"
              placeholder='nombre'
              value={nombre}
              onChange={onInputChange}
            />
          </div>
          <div className="col-6 md-3">
            <label htmlFor="ciudad">Ciudad</label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={ciudad}
              onChange={onInputChange}
              name='ciudad'
            >
              <option selected>seleccione</option>
              {loading ? <option key={0} selected>Cargando...</option>
                : error ? <option key={0}>Opciones no disponibles</option>
                  : data.map(ciud =>
                    <option key={ciud.id} value={ciud.id}>{ciud.nombre}</option>
                  )}
            </select>
          </div>
        </div>
            <hr className='hr'/>
        <div className='row contBtnEnviar'>          
            <button type="submit" className="btn btn-primary">Enviar</button>          
        </div>
      </form>
    </div>
  )
}