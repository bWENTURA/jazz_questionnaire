import {React, Fragment, useState} from "react";
import './Result.css';

const Result = ({name, surname, date, questionQuizScore, audioQuizScore}) => {

  const [displayName, setDisplayName] = useState(name);
  const [displaySurname, setDisplaySurname] = useState(surname);
  const [displayDate, setDisplayDate] = useState(date);
  // const [questionQuizScore, setQuestionQuizScore] = useState(questionQuizScore);
  // const [audioQuizScore, setAudioQuizScore] = useState(audioQuizScore)
  const [displayScore, setDisplayScore] = useState('')

  const onClickHandler = (e) => {
    e.preventDefault();
    setDisplayName(name);
    setDisplaySurname(surname);
    setDisplayDate(date);
    setDisplayScore(questionQuizScore + audioQuizScore)
    console.log(displayScore)
  };

    return (
      <Fragment>
        <section id="result">
          <button type="submit" onClick={onClickHandler}>Show Result</button> 
            <div className="data-container">
              <div className="userData">
                <p className="userData-name">{displayName}</p>
                <p className="userData-surname">{displaySurname}</p>
                <p className="userData-date">{displayDate}</p>
              </div>
            </div>
            <div className="quiz-container">
              <div className="quiz">
                <p className="quiz-ques">{displayScore}</p>
              </div>
            </div>
        </section>
      </Fragment>
    );
};

export default Result;