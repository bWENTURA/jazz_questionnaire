import {React, useRef} from 'react';
import './Player.css';
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsFillSkipEndCircleFill} from 'react-icons/bs';

const Player = ({songs, audioElem, isPlaying, setIsPlaying, currentSong, setCurrentSong})=> {

  const clickRef = useRef();
  
  const PlayOrPause = () => {
    setIsPlaying(!isPlaying);
    // zmienia wartość na true
  }

  // function that change duration of song by seek bar
  const checkWidth = (event) => {
    let width = clickRef.current.clientWidth;
    // it gives 100% width;
    const offset = event.nativeEvent.offsetX;
    // it gives an access to seek bar - where you click, you are on audio timeline;

    const seekBarProgress = offset / width * 100;
    audioElem.current.currentTime = seekBarProgress / 100 * currentSong.length;
  };

  // change audio file to previous one
  const skipBack = () => {
    const index = songs.findIndex(song => song.title === currentSong.title)
    if (index === 0) {
      setCurrentSong(songs[songs.length - 1] )
    } else {
      setCurrentSong(songs[index - 1])
    }
    audioElem.current.currentTime = 0;
    // take changed audio file to beggining
  }

  // change audio file to next one
  const skipNext = () => {
    const index = songs.findIndex(song => song.title === currentSong.title)
    if (index === songs.length - 1) {
      setCurrentSong(songs[0] )
    } else {
      setCurrentSong(songs[index + 1])
    }
    audioElem.current.currentTime = 0;
  }

  return (
    <div className='player-container'>
      <div className="title">
        <p>{currentSong.title}</p>
      </div>
      <div className="navigation">
        <div className="navigation-wrapper" onClick={checkWidth} ref={clickRef}>
          <div className="seek-bar" style={{width:`${currentSong.progress+"%"}`}}></div>
        </div>
      </div>
      <div className="controls-btn">
        <BsFillSkipStartCircleFill className='controls-btn__action' onClick={skipBack}/>
        {!isPlaying ? <BsFillPlayCircleFill className='controls-btn__action pp' onClick={PlayOrPause}/>
        : <BsFillPauseCircleFill className='controls-btn__action pp' onClick={PlayOrPause}/>
        }
        <BsFillSkipEndCircleFill className='controls-btn__action' onClick={skipNext}/>        
      </div>
    </div>
  
  )
}

export default Player