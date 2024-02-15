import React from 'react';
import { Link } from 'react-router-dom';
const Header = ( pros ) =>
{
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                    <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"/>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/dustbin">Dustbins</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="/location">Location</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link" to="#">Dustbins</Link>

                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};



export default Header;
