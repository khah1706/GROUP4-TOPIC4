import React from "react";
import logo from '../Assests/logo-navbar.png'
import './Navbar.css';

const Navbar = () => {
    return (<nav className="navbar">
        <div className="logo-text">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="text">
                <div>KOI</div>
                <div>POND</div>
                <div>DESIGN</div>
            </div>
        </div>
        <ul className="nav-links">
            <li><a href="/main">MAIN</a></li>
            <li><a href="/project">PROJECTS</a></li>
            <li><a href="/service">SERVICES</a></li>
            <li><a href="/contact">CONTACTS</a></li>
            <li><a href="/blog">BLOG</a></li>
            <li><a href="/about-us">ABOUT US</a></li>
        </ul>
    </nav>);
};
export default Navbar;