import { useState } from 'react';
import './Footer.css';

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
                    <a href="mailto:arash.laali@gmail.com">Contact</a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/arash-laali-03746b31/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
