import { Routes, Route } from "react-router-dom"
import { NavBarComp } from "../component/NavBarComp"
import { ErrorPage } from "../error-page/ErrorPage"
import {
    Ayuda, Configuracion, EmpleadosPage, InicioPage, LoginPage,
    NvaSucursalPage, NvoEmpleadoPage, RegistroPage, SucursalesPage
} from "../pages"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<NavBarComp />}>
                    <Route index element={<InicioPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/empleados" element={<EmpleadosPage />} />
                    <Route path="/sucursales" element={<SucursalesPage />} />
                    <Route path="/registroEmp" element={<NvoEmpleadoPage />} />
                    <Route path="/registroSuc" element={<NvaSucursalPage />} />
                    <Route path="/registrarse" element={<RegistroPage />} />
                    <Route path="/ayuda" element={<Ayuda />} />
                    <Route path="/configuracion" element={<Configuracion />} />
                    <Route path="/*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </>
    )
}