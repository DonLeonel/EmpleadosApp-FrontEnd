import style from '../styles/inicio.module.css'

export const InicioPage = () => {
  return (
    <div className={style.container}>
      <p className={style.pInicio}>
        Bienvenidos, <br />
        en esta aplicación podrás <br />
        administrar los empleados y las sucursales <br />
        correspondientes a los mismos.
      </p>
    </div>
  )
}


