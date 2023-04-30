import {React,} from "react";
import {FaTimes} from 'react-icons/fa';
import './Navbar.css';


const Navbar = (props) => {

    return (
        <header className="nav">
            <h3 className="nav-tittle">Navigation</h3>
            <nav className="nav-list">
                <a href="/#" className="nav-list__content">Data</a><br></br>
                <a href="/#" className="nav-list__content">Quiz</a><br></br>
                <a href="/#" className="nav-list__content">Music Preferences</a><br></br>
                <button className="nav-btn" onClick={props.onClick}>
                    <FaTimes />
                </button>
            </nav>
        </header>
    )
};

export default Navbar;