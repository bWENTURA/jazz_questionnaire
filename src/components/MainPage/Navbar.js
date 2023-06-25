import {React,} from "react";
import {Link} from 'react-scroll';
// import {animateScroll as scroll} from 'react-scroll';
import {FaTimes} from 'react-icons/fa';
import './Navbar.css';


const Navbar = (props) => {

    // const scrollToSection = id => {
    //     scroll.scrollTo(id);
    // }

    // return (
    //     <header id="header" className="nav">
    //         <h3 className="nav-tittle">Navigation</h3>
    //         <nav className="nav-list">
    //             <a href="/#data" className="nav-list__content">User Data</a><br></br>
    //             <a href="/#quiz" className="nav-list__content">Quiz</a><br></br>
    //             <a href="/#music-quiz" className="nav-list__content">Music Quiz</a><br></br>
    //             <a href="/#result" className="nav-list__content">Result</a>
    //             <button className="nav-btn" onClick={props.onClick}>
    //                 <FaTimes />
    //             </button>
    //         </nav>
    //     </header>
    // )
    return (
        <header id="header" className="nav">
            <h3 className="nav-tittle">Navigation</h3>
            <nav >
                <ul className="nav-list">
                    <li className="nav-list__content">
                        <Link>User Data</Link>
                    </li>
                    <li className="nav-list__content">
                        <Link>Quiz</Link>
                    </li>
                    <li className="nav-list__content">
                        <Link>Music Quiz</Link>
                    </li>
                    <li className="nav-list__content">
                        <Link> Result</Link>
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