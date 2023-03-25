import {React, Fragment, useState, useRef} from "react";
import Player from "./Player";
import {MdExpandMore, MdExpandLess} from 'react-icons/md';
import './MusicQuiz.css';

const MusicQuiz = () => {

    const [expand, setExpand] = useState(false);
    const [songs, setSongs] = useState(songsData);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(songsData[0]);

    // changin visibility of section
    const expandMoreHandler = () => {
        setExpand(false)
    };

    const expandLessHandler = () => {
        setExpand(true)
    };

    const songsData = [
        {
            title: "Beirut - Prezlaurberg",
            src: '../audio/Prenzlaurberg.mp3',
            id: 0,
        },
        {
            title: "Art Blakey - Moanin",
            src: "../audio/Moanin'.mp3",
            id: 1,
        },
        {
            title: "Bill Evans - Nardis",
            src: "../audio/Nardis.mp3",
            id: 2,
        },
        {
            title: "Bob Marley - No Woman No Cry",
            src: "../audio/No-Woman-No-Cry.mp3",
            id: 3,
        },
        {
            title: "Brad Mehldau - Paris",
            src: "../audio/Paris.mp3",
            id: 4,
        },
        {
            title: "Arms and the sleepers",
            src: "../audio/The-Architekt.mp3",
            id: 5,
        },
    ]

    //  

    return (
        <Fragment>
            {expand ? 
                <section className='container'>
                    <div className="container-tittle">    
                        <h2>Music Quiz</h2>
                        <button className="expand-more-button" onClick={expandMoreHandler}>
                            <MdExpandMore />
                        </button>
                    </div>
                </ section>
            :
                <section className='container'>
                    <div className="container-title">    
                        <h2>Music Quiz</h2>
                        <button className="expand-more-button" onClick={expandLessHandler}>
                            <MdExpandLess className="expand-more-button-component"/>
                        </button>
                    </div>
                    <div className="music-quiz">
                        <audio src="../audio/Prenzlaurberg.mp3"/>
                        <Player/>
                    </div>
                </section>}
        </Fragment>
    )
};

export default MusicQuiz;