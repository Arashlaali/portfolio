import { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    const [isFooterOpen, setIsFooterOpen] = useState(false); // State to toggle the footer menu

    const toggleFooter = () => {
        setIsFooterOpen(!isFooterOpen); // Toggle footer visibility
    };

    return (
        <footer className="footer">
            <h2>ARASH LAALI</h2>

            {/* Toggle Icon */}
            <div className="footer-toggle" onClick={toggleFooter}>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {/* Footer Links */}
            <ul className={`footer-ul ${isFooterOpen ? 'active' : ''}`}>
                <li>
                    <Link to="/contact">CONTACT</Link>
                </li>
                <li>
                    <Link to="/privacy">PRIVACY POLICY</Link>
                </li>
                <li>
                    <Link to="/terms">TERMS OF SERVICE</Link>
                </li>
                <li>
                    <Link to="/socials">SOCIAL MEDIA</Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
