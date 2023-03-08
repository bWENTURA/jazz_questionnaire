import React from "react";
import './MainPage.css';

import GithubIcon from "../icons/git-hub-icon.png"

const MainPage = () => {

    return (
        <div>
            <article className="intro">
                <div className="corner-github">
                    <a href="https://github.com/PIvSky" className="corner-github__icon">
                        <img alt="remote-repo-icon" src={GithubIcon} className="corner-github__iconPic"/>
                    </a>
                </div>
                <div className="intro-container">
                    <h1 className="intro-container__question">Do you have predispositions <br></br> to be a jazzman?</h1>
                    <button className="intro-container__button ">Let's check it!</button>
                </div>
            </article>
        </div>
    )
}

export default MainPage;