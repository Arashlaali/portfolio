import { useState } from 'react';
import './Footer.css';

function Footer() {
    const [isFooterOpen, setIsFooterOpen] = useState(false); // State to toggle the footer menu

    const toggleFooter = () => {
        setIsFooterOpen(!isFooterOpen); // Toggle footer visibility
    };

    return (
        <footer className="footer">
            {/* Left: Contact */}
            <div className="footer-left">
                <a href="mailto:arash.laali@gmail.com">Contact</a>
            </div>

            {/* Center: Name */}
            <div className="footer-center">
                <h2>ARASH LAALI</h2>
            </div>

            {/* Right: LinkedIn */}
            <div className="footer-right">
                <a
                    href="https://www.linkedin.com/in/arash-laali-03746b31/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </div>
        </footer>

    );
}

export default Footer;
