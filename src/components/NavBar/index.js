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
                    <li><a href="/">About</a></li>
                    <li className="services">
                        Services
                        {/* <!-- DROPDOWN MENU --> */}
                        <ul className="dropdown">
                            <li><a href="/">Dropdown 1 </a></li>
                            <li><a href="/">Dropdown 2</a></li>
                            <li><a href="/">Dropdown 2</a></li>
                            <li><a href="/">Dropdown 3</a></li>
                            <li><a href="/">Dropdown 4</a></li>
                        </ul>
                    </li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Contact</a></li>
                </div>
            </ul>
        </nav>
    )
}
