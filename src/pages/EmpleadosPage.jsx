import { useFetch } from "../hooks/useFetch"

const URL_GET_ALL_EMPLEADOS = 'https://localhost:7219/api/Empleados/getAll'

export const EmpleadosPage = () => {

    const { data, error, loading } = useFetch(URL_GET_ALL_EMPLEADOS)

    return (
        <div className="container">
            <div className='headerFlex'>
                <h2 className="subtitulosPage">Listado de empleados</h2>
                <a href="/registroEmp" className="newEmpSuc">Nuevo Empleado</a>
            </div>
            {loading
                ? <h4 className='isLoading'>Cargando...</h4>
                : <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Dni</th>
                            <th scope="col">Fecha Alta</th>
                            <th scope="col">Sucursal</th>
                            <th scope="col">Ciudad</th>
                            <th scope="col">Cargo</th>
                            <th scope="col">Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {error ? console.log(error)
                            : data.map(empl => {
                                return (
                                    <tr key={empl.id}>
                                        <td>#</td>
                                        <td>{empl.nombre}</td>
                                        <td>{empl.apellido}</td>
                                        <td>{empl.dni}</td>
                                        <td>{empl.fechaAlta}</td>
                                        <td>{empl.sucursal.nombre}</td>
                                        <td>{empl.sucursal.ciudad.nombre}</td>
                                        <td>{empl.cargo.nombre}</td>
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
