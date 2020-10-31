import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg'
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <nav className = "navbar">
                {/* Logo */}
                <Link className = "nav-title" to="/Home">
                    <img className = "nav-logo" src={Logo} alt="React logo" />
                </Link>

                {/* Page Links */}
                <div className = "nav-items">
                    <Link className = "nav-link" to='/Home'>Home</Link>
                    <Link className = "nav-link" to='/Register'>Extra Page</Link>
                    {/* <div className="nav-search">
                        <input type="search"></input>
                        <button>Search</button>
                    </div> */}
                </div>
            </nav>
        </div>
    )
};

export default NavBar;
