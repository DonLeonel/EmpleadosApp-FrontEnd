import { Outlet } from 'react-router-dom';
import '../styles/navbar.css'

export const NavBarComp = () => {

  const mostrarMenu = () => {
    const navMenu = document.getElementsByClassName('Nav-menu')[0];
    navMenu.classList.toggle("Nav-menu_visible");

    const navToggle = document.getElementsByClassName('Nav-toggle')[0]

    if (navMenu.classList.contains('Nav-manu_visible')) {

      navToggle.setAttribute('aria-label', 'Cerrar menú');
    }
    else {
      navToggle.setAttribute('aria-label', 'Abrir menú');
    }
  }

  return (
    <>
      <header className='header'>
        <nav className='Nav'>
          <div>
            <a className='logo Nav-link' href="/">Logo</a>
          </div>
          <button onClick={mostrarMenu} className='Nav-toggle' aria-label='Abrir menú'>
            <i class="fa-solid fa-bars"></i>
          </button>
          <ul className="Nav-menu" >
            <li className="Nav-menu-item">
              <a className="Nav-menu-link Nav-link" href="/empleados">Empleados</a>
            </li>
            <li className="Nav-menu-item">
              <a className="Nav-menu-link Nav-link" href="/sucursales">Sucursales</a>
            </li>
            <li className="Nav-menu-item">
              <a className="Nav-menu-link Nav-link" href="/ayuda">ayúda</a>
            </li>
            <li className="Nav-menu-item dropdown">
              <a className="Nav-link Nav-menu-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                cuenta 
              </a>
              <ul className="dropdown-menu contDropM">
                <li><a className="dropdown-item dropM" href="/login">Iniciar Sección</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item dropM" href="/configuracion">Configuración</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>

  )
}

