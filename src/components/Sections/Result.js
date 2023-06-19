import {React, Fragment, useState} from "react";
import './Result.css';

const Result = ({name, surname, date, questionQuizScore, audioQuizScore}) => {

  const [expand, setExpand] = useState(true);
  const [displayName, setDisplayName] = useState(name);
  const [displaySurname, setDisplaySurname] = useState(surname);
  const [displayDate, setDisplayDate] = useState(date);
  // const [questionQuizScore, setQuestionQuizScore] = useState(questionQuizScore);
  // const [audioQuizScore, setAudioQuizScore] = useState(audioQuizScore)
  const [displayScore, setDisplayScore] = useState(0)
  
  // changin visibility of section

  const onClickHandler = (e) => {
    e.preventDefault();
    setDisplayName(name);
    setDisplaySurname(surname);
    setDisplayDate(date);
    setDisplayScore(Math.floor(((questionQuizScore + audioQuizScore)/14)*100));
    setExpand(false)
  };
  // console.log(displayScore)

  const refreshPage = () => {
    window.scrollTo(0,0)
    window.location.reload();
    // probably to refactoring
  }

    return (
      <Fragment>
        {expand ? 
          <section id="result" className="container">
            <div className="result-container-title">    
                <h2>Result</h2>
            </div>
            <div className="data-container">
              <button type="submit" onClick={onClickHandler}>Show Result</button> 
            </div>
          </section>
        :
          <section id="result" className="container">
            <div className="result-container-title">    
                <h2>Result</h2>
            </div>
            <div className="data-container">
              <p className="data-name">Name: <span>{displayName}</span></p>
              <p className="data-surname">Surname: <span>{displaySurname}</span></p>
              <p className="data-date">Birth Date: <span>{displayDate}</span></p>
              <p className="data-result">Score: <span>{displayScore}%</span></p>
              <button className="data-button" type="submit" onClick={refreshPage}>Try again!</button>
            </div>
          </section>
        }
      </Fragment>
    );
};

export default Result;