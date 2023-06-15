import {React, Fragment, useState} from "react";
import './Result.css';

const Result = ({name, surname, date, questionQuizScore}) => {

  const [displayName, setDisplayName] = useState(name);
  const [displaySurname, setDisplaySurname] = useState(surname);
  const [displayDate, setDisplayDate] = useState(date);
  const [displayScore, setDisplayScore] = useState(questionQuizScore);

  const onClickHandler = (e) => {
    e.preventDefault();
    setDisplayName(name);
    setDisplaySurname(surname);
    setDisplayDate(date);
    setDisplayScore(questionQuizScore);
    console.log(name, surname, date)

    // setDisplayDate(date)
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
                <p className="quiz-result">{displayScore}</p>
              </div>
            </div>
        </section>
      </Fragment>
    );
};

export default Result;