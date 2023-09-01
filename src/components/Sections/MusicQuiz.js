import {React, Fragment, useState, useRef, useEffect} from "react";
import Player from "./Player";
import {MdExpandMore, MdExpandLess} from 'react-icons/md';
import './MusicQuiz.css';
// music files import
import Beirut from "../../assets/audio/Prenzlaurberg.mp3"
import Moanin from "../../assets/audio/Moanin.mp3";
import Nardis from '../../assets/audio/Nardis.mp3';
import Marley from "../../assets/audio/No-Woman-No-Cry.mp3";
import Mehldau from "../../assets/audio/Paris.mp3";
import Architekt from "../../assets/audio/The-Architekt.mp3"

// import songsData from '../../data/songsData.json';

const songsData = [
    {
        title: "1. Beirut - Prezlaurberg",
        src: `${Beirut}`,
        value: 0,
        checked: false,
        id: 0,
    },
    {
        title: "2. Art Blakey - Moanin",
        src: `${Moanin}`,
        value: 2,
        checked: false,
        id: 1,
    },
    {
        title: "3. Bill Evans - Nardis",
        src: `${Nardis}`,
        value: 2,
        checked: false,
        id: 2,
    },
    {
        title: "4. Bob Marley - No Woman No Cry",
        src: `${Marley}`,
        value: 0,
        checked: false,
        id: 3,
    },
    {
        title: "5. Brad Mehldau - Paris",
        src: `${Mehldau}`,
        value: 2,
        checked: false,
        id: 4,
    },
    {
        title: "6. Arms and the sleepers",
        src: `${Architekt}`,
        value: 0,
        checked: false,
        id: 5,
    },
]

const MusicQuiz = ({onCheckHandler, onSumHandler, onSongData}) => {

    // React Hooks
    const [expand, setExpand] = useState(false);
    const [songs, setSongs] = useState(songsData);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(songsData[0]);
    // const [checkValue, setCheckValue] = useState(songsData)
    const audioElem = useRef()

    // Play or pause music
    useEffect(() => {
        if(isPlaying){
            audioElem.current.play();
        }else{
            audioElem.current.pause();
        }
    }, [isPlaying])

    // changin visibility of section
    const expandMoreHandler = () => {
        setExpand(false)
    };

    const expandLessHandler = () => {
        setExpand(true)
    };

    // music player
    const onPlaying = () => {
        const duration = audioElem.current.duration;
        const ct = audioElem.current.currentTime;

        setCurrentSong({...currentSong, 'progress': ct / duration * 100, 'length': duration})
    };

    return (
        <Fragment>
            {expand ? 
                <section id="music-quiz" className='container'>
                    <div className="music-quiz-container-title">    
                        <h2>Music Quiz</h2>
                        <button className="expand-more-button" onClick={expandMoreHandler}>
                            <MdExpandMore />
                        </button>
                    </div>
                </ section>
            :
                <section id="music-quiz" className='container'>
                    <div className="music-quiz-container-title">    
                        <h2>Music Quiz</h2>
                        <button className="expand-more-button" onClick={expandLessHandler}>
                            <MdExpandLess className="expand-more-button-component"/>
                        </button>
                    </div>
                    <div className="music-quiz">
                        <audio 
                            src={currentSong.src}
                            ref={audioElem} 
                            onTimeUpdate={onPlaying}
                        />
                        <Player 
                            songs={songs} 
                            setSongs={setSongs} 
                            isPlaying={isPlaying} 
                            setIsPlaying={setIsPlaying} 
                            audioElem={audioElem}
                            currentSong={currentSong}
                            setCurrentSong={setCurrentSong}
                        />
                    </div>
                    <div className="answears-container">
                        <div className="anwsears-list">
                            {onSongData.map((checkbox) => (
                                <ul key={checkbox.title}>
                                    <label key={checkbox.title}>
                                        <input title={checkbox.title} type='checkbox' checked={checkbox.checked} onChange={onCheckHandler}></input>
                                        {checkbox.title}
                                    </label>
                                </ul>
                            ))}
                            {/* <button onClick={onSumHandler}>Submit checker only!</button> */}
                        </div>
                    </div>
                    <div onClick={onSumHandler} className="button-container__player">
                        <button>Enter My Answears!</button>
                    </div>
                </section>}
        </Fragment>
    )
};

export default MusicQuiz;