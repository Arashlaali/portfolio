import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
    };

    return (
        <nav className="navbar">
            <h2>ARASH LAALI</h2>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {/* Menu */}
            <ul className={`navbar-ul ${isMenuOpen ? 'active' : ''}`}>
                <li>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link>
                </li>
                <li>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
                </li>
                <li>
                    <Link to="/projects" onClick={() => setIsMenuOpen(false)}>PROJECTS</Link>
                </li>
                <li>
                    <Link to="/photography" onClick={() => setIsMenuOpen(false)}>PHOTOGRAPHY</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
