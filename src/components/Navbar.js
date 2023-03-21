import {React,} from "react";
import {FaTimes} from 'react-icons/fa';
import './Navbar.css';


const Navbar = (props) => {

    return (
        <header className="nav" onClick={props.onClick}>
            <h3>Navigation</h3>
            <nav className="nav-list">
                <a href="/#">Section 1</a><br></br>
                <a href="/#">Section 2</a><br></br>
                <a href="/#">Section 3</a><br></br>
                <button className="nav-btn" onClick={props.onClick}>
                    <FaTimes />
                </button>
            </nav>
        </header>
    )
};

export default Navbar;
