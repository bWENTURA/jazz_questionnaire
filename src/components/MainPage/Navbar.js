import { React } from "react";
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({onClose, modeHandler, mode, darkMode, lightMode, isPopupVisible, onEnter, onLeave}) => {

    return (
        <header id="header" className="nav">
            <h3 className="nav-tittle">Navigation</h3>
            <nav >
                <ul className="nav-list">
                    <li className="nav-list__content">
                        <Link to="data" spy={true} smooth={true} offset={0} duration={300}>1. User Data</Link>
                    </li>
                    <li className="nav-list__content">
                        <Link to="quiz" spy={true} smooth={true} offset={0} duration={300}>2. Quiz</Link>
                    </li>
                    <li className="nav-list__content">
                        <Link to="music-quiz" spy={true} smooth={true} offset={0} duration={300}>3. Music Quiz</Link>
                    </li>
                    <li className="nav-list__content">
                        <Link to="result" spy={true} smooth={true} offset={0} duration={300}>4. Result</Link>
                    </li>
                    <li className="nav-list__btn close">
                        <button className="nav-btn" onClick={onClose}>
                            <FaTimes />
                        </button>
                    </li>
                    <li className="nav-list__btn mode">
                        {mode ?
                            <div 
                                onMouseEnter={onEnter} 
                                onMouseLeave={onLeave}>
                                <span 
                                    className="material-symbols-sharp light-mode"
                                    onClick={() => {modeHandler(); darkMode()}} >dark_mode</span>
                                {isPopupVisible && <p className="popup-text">Take care of your eyes!</p>}
                            </div>
                            :
                            <span onClick={() => {modeHandler(); lightMode()}} className="material-symbols-sharp dark-mode">light_mode</span>
                        }                           
                    </li>

                </ul>
            </nav>
        </header>
    )
};

export default Navbar;