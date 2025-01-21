import React from 'react';
import Navigation from './Navigation';
import './Header.css';
import logo from './logo.jpg';

function Header() {
    return (
        <header>
            <div className='logo_container'>
                <a href="/" className="logo">
                    <img src={logo} alt="Tierheim Logo" />
                </a>
            </div>
            <div className="container">   
                <Navigation />
            </div>
        </header>
    );
}

export default Header;
