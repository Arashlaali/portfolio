
import "./Navbar.css";
// import '../components/Header.css';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar" >
            <h2> Portfolio</h2>
            <ul className="navbar-ul">
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about"> ABOUT</Link>
                </li>
                <li>
                    <Link to="/projects"> PROJECTS</Link>
                </li>
                <li>
                    <Link to="/hobbies">HOBBIES</Link>
                </li>
            </ul>
        </nav>

    )

}

export default Navbar;