import {React,} from "react";
// import { Link } from 'react-scroll';
import {Link} from 'react-scroll';
import {FaTimes} from 'react-icons/fa';
import './Navbar.css';

const Navbar = (props) => {

    return (
        <header id="header" className="nav">
            <h3 className="nav-tittle">Navigation</h3>
            <nav >
                <ul className="nav-list">
                    <li className="nav-list__content">
                        <Link to="data" spy={true} smooth={true} offset={0} duration={300}>User Data</Link>
                    </li>
                    <li className="nav-list__content">
                        <Link to="quiz" spy={true} smooth={true} offset={0} duration={300}>Quiz</Link>
                    </li>
                    <li className="nav-list__content">
                        <Link to="music-quiz" spy={true} smooth={true} offset={0} duration={300}>Music Quiz</Link>
                    </li>
                    <li className="nav-list__content">
                        <Link to="result" spy={true} smooth={true} offset={0} duration={300}>Result</Link>
                    </li>
                    <li>
                        <button className="nav-btn" onClick={props.onClick}>
                            <FaTimes />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Navbar;