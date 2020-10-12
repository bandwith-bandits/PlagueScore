import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg'
import '../../assets/framework.css'
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <nav className = "header">
                {/* Logo */}
                <Link className = "nav-title" to="/">
                    <img className = "nav-logo" src={ Logo} alt="React logo" />
                </Link>

                {/* Page Links */}
                <div className = "nav-items">
                    <Link className = "nav-link" to='/Home'>Home</Link>
                    <Link className = "nav-link" to='/Register'>Extra Page</Link>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;
