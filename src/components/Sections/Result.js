import {React, Fragment, useState} from "react";
import './Result.css';

const Result = ({name, surname, date, gender, email, phone, country, job, questionQuizScore, audioQuizScore}) => {

  const [expand, setExpand] = useState(true);
  const [displayName, setDisplayName] = useState(name);
  const [displaySurname, setDisplaySurname] = useState(surname);
  const [displayDate, setDisplayDate] = useState(date);
  const [displayGender, setDisplayGender] = useState(gender);
  const [displayEmail, setDisplayEmail] = useState(email);
  const [displayPhone, setDisplayPhone] = useState(phone);
  const [displayJob, setDisplayJob] = useState(job);
  const [displayCountry, setDisplayCountry] = useState(country);
  // const [questionQuizScore, setQuestionQuizScore] = useState(questionQuizScore);
  // const [audioQuizScore, setAudioQuizScore] = useState(audioQuizScore)
  const [displayScore, setDisplayScore] = useState(0)
  
  // changin visibility of section

  const onClickHandler = (e) => {
    e.preventDefault();
    setDisplayName(name);
    setDisplaySurname(surname);
    setDisplayDate(date);
    setDisplayGender(gender);
    setDisplayEmail(email);
    setDisplayPhone(phone);
    setDisplayJob(job);
    setDisplayCountry(country)
    setDisplayScore(Math.floor(((questionQuizScore + audioQuizScore)/14)*100));
    setExpand(false);
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight)
    }, 300)
  };
  // console.log(displayScore)

  const refreshPage = () => {
    window.scrollTo(0,0)
    setTimeout(() => {
      window.location.reload();

    }, 200)
    // probably to refactoring - bad behaviour of reload(); after reload not positioned on the top
    
  }

    return (
      <Fragment>
        {expand ? 
          <section id="result" className="container">
            <div className="result-container-title">    
                <h2>Result</h2>
            </div>
            <div className="button-container__result">
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
              <p className="data-gender">Gender: <span>{displayGender}</span></p>
              <p className="data-email">Email: <span>{displayEmail}</span></p>
              <p className="data-phone">Phone Number: <span>{displayPhone}</span></p>
              <p className="data-country">Country: <span>{displayCountry}</span></p>
              <p className="data-job">Job: <span>{displayJob}</span></p>
              <p className="data-result">Score: <span>{displayScore}%</span></p>
              <div className="button-container__result">
                <button className="data-button" type="submit" onClick={refreshPage}>Try again!</button>
              </div>
            </div>
          </section>
        }
      </Fragment>
    );
};

export default Result;