import LogOut from 'components/LogOut'
import React from 'react'
import './NavBar.scss'

export default function NavBar() {
    return (
        <nav className="navbar">
            {/*Logo            */}
            <div className="logo">LOGO</div>
            {/* Nav menu */}
            <ul className="nav-links">
                {/* USING CHECKBOX HACK */}
                <input type="checkbox" id="checkbox_toggle" />
                <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                {/* <!-- NAVIGATION MENUS --> */}
                <div className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Notas</a></li>
                    <li><a href="/">Calendario</a></li>
                    <li className="services">
                        Economia
                        <ul className="dropdown">
                            <li><a href="/">Gastos</a></li>
                            <li><a href="/">Ingresos</a></li>
                            <li><a href="/">Facturas</a></li>
                            <li><a href="/">Presupuestos</a></li>
                            <li><a href="/">Ahorro</a></li>
                        </ul>
                    </li>
                    {/* <li><a href="/">Pricing</a></li> */}
                    <li className="nohover" ><LogOut></LogOut></li>
                </div>
            </ul>
        </nav>
    )
}
