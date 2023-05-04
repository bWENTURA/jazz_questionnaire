import {React,} from "react";
// import {Link} from 'react-router-dom';
// import {animateScroll as scroll} from 'react-scroll';
import {FaTimes} from 'react-icons/fa';
import './Navbar.css';


const Navbar = (props) => {

    // const scrollToSection = id => {
    //     scroll.scrollTo(id);
    // }

    return (
        <header className="nav">
            <h3 className="nav-tittle">Navigation</h3>
            <nav className="nav-list">
                <a href="/#data" className="nav-list__content">User Data</a><br></br>
                <a href="/#quiz" className="nav-list__content">Quiz</a><br></br>
                <a href="/#music-quiz" className="nav-list__content">Music Quiz</a><br></br>
                <a href="/#result" className="nav-list__content">Result</a>
                <button className="nav-btn" onClick={props.onClick}>
                    <FaTimes />
                </button>
            </nav>
        </header>
    )
};

export default Navbar;