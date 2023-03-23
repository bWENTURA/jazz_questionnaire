import {React, Fragment, useState} from "react";
import './MainPage.css';
import Navbar from "./Navbar";

import GithubIcon from "../icons/git-hub-icon.png"
// import BgImgJazz from "../graphics/background-jazz-band.png"

const MainPage = (props) => {

    const [show, setShow] = useState(false)

    const closeButtonHandler = () => {
        setShow(false)
    };

    const showButtonHandler = () => {
        setShow(true)
    };

    return (
        <Fragment>
            <section className="intro">
                {show ? <Navbar onClick={closeButtonHandler}></Navbar> : '' }
                <div className="corner-github">
                    <a href="https://github.com/PIvSky" className="corner-github__icon">
                        <img alt="remote-repo-icon" src={GithubIcon} className="corner-github__iconPic"/>
                    </a>
                </div>
                <div className="intro-container">
                    <h1 className="intro-container__question">Can I be a jazzman?</h1>
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