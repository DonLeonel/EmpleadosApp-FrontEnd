import { useFetch } from "../hooks/useFetch"

const URL_GET_ALL_SUCURSALES = 'https://localhost:7219/api/Sucursales/getSucursales'

export const SucursalesPage = () => {

  const { data, error, loading } = useFetch(URL_GET_ALL_SUCURSALES)

  return (
    <div className="container">
      <div className="headerFlex">
        <h2 className="subtitulosPage">Listado de sucursales</h2>
        <a href="/registroSuc" className="newEmpSuc">Nueva Sucursal</a>
      </div>
      {loading
        ? <h4 className="isLoading">Cargando...</h4>
        : <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>              
              <th scope="col">Ciudad de Ubicación</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            {error ? console.log(error)
              : data.map(Sucur => {
                return (
                  <tr key={Sucur.id}>
                    <td>#</td>
                    <td>{Sucur.nombre}</td>                    
                    <td>{Sucur.ciudad.nombre}</td>                    
                    <td>
                      <button
                        className="bg-primary"
                      >Actualizar</button>
                      <button
                        className="bg-danger"
                      >Borrar</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      }
    </div>
  )
}
