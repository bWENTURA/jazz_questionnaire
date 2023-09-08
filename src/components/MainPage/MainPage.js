import {React, Fragment, useState, useEffect} from "react";
import './MainPage.css';
import Navbar from "./Navbar";
import 'animate.css';

import GithubIcon from "../../assets/icons/git-hub-icon.png"
// import BgImgJazz from "../graphics/background-jazz-band.png"

const MainPage = (props) => {

    const [show, setShow] = useState(false);
      // LIGHT / DARK MODE
    const [isLightMode, setIsLightMode] = useState(true);

    const closeButtonHandler = () => {
        setShow(false)
    };

    const showButtonHandler = () => {
        setShow(true)
    };


    return (
        <Fragment>
            <section className="intro">
                {show ? <Navbar onClick={closeButtonHandler} modeHandler={props.onClick}></Navbar> 
                : 
                '' }
                <div className="corner-github">
                    <a href="https://github.com/PIvSky" className="corner-github__icon">
                        <img alt="remote-repo-icon" src={GithubIcon} className="corner-github__iconPic"/>
                    </a>
                </div>
                <div className="intro-container">
                    <h1 className="intro-container__question animate__animated animate__swing">Can I be a jazzman?</h1>
                    <button className="intro-container__button" onClick={showButtonHandler}>Let's check it!</button>
                </div>
                {/* <div className="background-jazz-band-img">
                    <img alt="background-jazz-band-img" src={BgImgJazz}></img>
                </div> */}
            </section>
        </ Fragment>
    )
}

export default MainPage;