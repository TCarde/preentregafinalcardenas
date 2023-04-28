import React from 'react';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../consola.svg';

const NavBar = () => {
    return(
        <div className="container" id="navbar">
            <div className="row">
                        <div className="col-6">
                            <nav className="navbar navbar-expand-lg ">
                                <div className="container-fluid">
                                    <Link className="navbar-brand" to={"/"}><img src={logo} alt="Tito´s Games" width={100} /></Link>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to={"/category/PlayStation"} >Play Station</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link" to={"/category/Xbox"}>Xbox</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link" to={"/category/Nintendo"}>Nintendo</NavLink>
                                        </li>
                                        
                                    </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-6 d-flex justify-content-end  align-items-center">
                            <NavLink className="nav-link" to='cart'><CartWidget/></NavLink>
                        </div>        
            </div>
        </div>          
    )
}

export default NavBar;