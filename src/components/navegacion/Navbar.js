
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fixed">
                    <Link to='/'>
                        <h3>Lente Nativo App</h3>
                    </Link>
                  
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto ">
                            <li className="nav-item">
                                <Link className="nav-link" to='/' >Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contacto' >Contacto</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/redes' >Redes</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar
