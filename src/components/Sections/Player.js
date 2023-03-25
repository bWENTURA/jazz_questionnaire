import React, { useRef } from 'react';
import './Player.css';
import {BsFillSkipPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill} from 'react-icons/bs';

const Player = ()=> {

  return (
    <div className='player-container'>
      <div className="title">
        <p></p>
      </div>
      <div className="navigation">
        <div className="navigation-wrapper" >
          <div className="seek-bar"></div>
        </div>
      </div>
      <div className="controls-btn">
        <BsFillSkipStartCircleFill className='controls-btn__action' />
        <BsFillPauseCircleFill className='controls-btn__action pp' />
        <BsFillSkipEndCircleFill className='controls-btn__action' />        
      </div>
    </div>
  
  )
}

export default Player