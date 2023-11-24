import { Outlet } from 'react-router-dom';
import style from '../styles/navbar.module.css'

export const NavBarComp = () => {

  const mostrarMenu = () => {
    const navMenu = document.getElementsByClassName(style.navMenu)[0];
    navMenu.classList.toggle(style.navMenuVisible);

    const navToggle = document.getElementsByClassName(style.navToggle)[0]

    if (navMenu.classList.contains(style.navMenuVisible)) {

      navToggle.setAttribute('aria-label', 'Cerrar menú');
    }
    else {
      navToggle.setAttribute('aria-label', 'Abrir menú');
    }
  }

  return (
    <>
      <header className={style.header}>
        <nav className={style.nav}>
          <div>
            <a className={`${style.logo} ${style.navLink}`} href="/">Logo</a>
          </div>
          <button onClick={mostrarMenu} className={style.navToggle} aria-label='Abrir menú'>
            <i className="fa-solid fa-bars"></i>
          </button>
          <ul className={style.navMenu} >
            <li className={style.navMenuItem}>
              <a className={`${style.navMenuLink} ${style.navLink}`} href="/empleados">Empleados</a>
            </li>
            <li className={style.navMenuItem}>
              <a className={`${style.navMenuLink} ${style.navLink}`} href="/sucursales">Sucursales</a>
            </li>
            <li className={style.navMenuItem}>
              <a className={`${style.navMenuLink} ${style.navLink}`} href="/ayuda">ayúda</a>
            </li>
            <li className={`${style.navMenuItem} ${style.dropdown}`}>
              <a className={`${style.navMenuLink} ${style.navLink} dropdown-toggle`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                cuenta
              </a>
              <ul className='dropdown-menu'>
                <li><a className={`${style.anchor} dropdown-item`} href="/login">Iniciar Sesión</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className={`${style.anchor} dropdown-item`} href="/configuracion">Configuración</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>

  )
}

