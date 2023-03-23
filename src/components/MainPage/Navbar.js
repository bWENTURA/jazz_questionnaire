import {React,} from "react";
import {FaTimes} from 'react-icons/fa';
import './Navbar.css';


const Navbar = (props) => {

    return (
        <header className="nav">
            <h3>Navigation</h3>
            <nav className="nav-list">
                <a href="/#">Data</a><br></br>
                <a href="/#">Quiz</a><br></br>
                <a href="/#">Music Preferences</a><br></br>
                <button className="nav-btn" onClick={props.onClick}>
                    <FaTimes />
                </button>
            </nav>
        </header>
    )
};

export default Navbar;