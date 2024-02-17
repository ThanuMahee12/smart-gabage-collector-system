import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';


const NavItem = ({path,title}) =>
{
    return (
        <li className="nav-item">
            <Link className="nav-link" to={path}>{title}</Link>
        </li>
    )
}

const Header = ( pros ) =>
{
    const NavItems = useMemo( () => [
        {
            path: "/",
            title:"Home"
        },
        {
            path: "/dustbin",
            title: "DustBins"
        },
        {
            path: "/location",
            title: "Location"
        }
    ], [])
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className='rounded rounded-circle' src="https://cdn.dribbble.com/userupload/10700531/file/original-363739e9e7a0437b89d6ecbad658f5d8.jpg" alt="" width="40" height="40"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            NavItems.map( ( item, index ) => ( <NavItem key={index} {...item} /> ))
                       }

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};



export default Header;
