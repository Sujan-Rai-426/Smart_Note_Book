

// Navbar

import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        
        <div style={{ top:'0' , zIndex: '20' , position: 'sticky'}}>
            <nav className="navbar navbar-expand-lg bg-dark light">
                <div className="container-fluid">

                    {/* toggle button */}
                    <button className='btn btn-dark mx-4' onClick={props.toggleMode}> {props.mode.backgroundColor === '#171b46'? (<i className="bi bi-sun-fill"></i>) : (<i className="bi bi-moon-fill"></i>) } </button>

                    <Link className="navbar-brand text-light" to="/"><b>Smart-Note <sup><u>Book</u></sup></b></Link>

                        {/* Hammer toggle button 3 dots */}
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="bi bi-three-dots btn-dark"></i></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/logout">Logout</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="https://www.sujan140.com.np">Portfolio</a></li>
                                    <li><a className="dropdown-item" href="https://react-projects-azure.vercel.app/">Text PlayGround</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="https://react-projects-azure.vercel.app/password_generator">Password Generator</a></li>
                                </ul>
                            </li>

                            {/* <li className="nav-item">
                                <Link className="nav-link disabled text-light" aria-disabled="true">Disabled</Link>
                            </li> */}
                        </ul>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar