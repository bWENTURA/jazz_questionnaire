import {React, Fragment, useState, useEffect} from 'react';
import 'animate.css';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import UserData from './components/Sections/UserData';
import Quiz from './components/Sections/Quiz';
import Result from './components/Sections/Result';
import MusicQuiz from './components/Sections/MusicQuiz';
import questions from './data/questions.json';

const App = () => {
  // below hooks for UserData component
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [date, setDate] = useState('');
  // below hooks for Quiz component
  const [showScore, setShowScore] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // below useState will store value of checkded input
  const [selectedInput, setSelectedInput] = useState(0);
  // hook which store the answers
  const [answer, setAnswer] = useState({})
  const [quizScore, setQuizScore] = useState('');

  const handleNameChange = (value) => {
    setName(value);
  };
  const handleSurnameChange = (value) => {
    setSurname(value);
  };
  const handleDateChange = (value) => {
    setDate(value)
  };

  const answerHandler = (event) => {
    setSelectedInput(event.target.value);
    // jeżeli masz zmienną, pod którą jest wartość liczbowa 0 (lub chyba też ujemne; mniej bądź równe 0) to boolean będzie false!!!
    if (currentQuestion !== null) {
      questions[currentQuestion].options.forEach(option => {
        setAnswer(prevAnswer => ({
          ...prevAnswer,
          [option.name]: Number(event.target.value),
        }));
      });
    } else {
      console.log('Something went wrong, my friend.');
    }
  };

// question changing functionality
const nextQuestionHandler = (event) => {
    event.preventDefault();
        console.log('Selected value: ', selectedInput);
    if (currentQuestion + 1 < questions.length){
        setCurrentQuestion(currentQuestion + 1)

        // reset input radio in next question and without influence on questions key 'checked'
        const input = document.querySelectorAll("input[type='radio']");
        input.forEach((input) => {
            input.checked = false;
        })
        console.log(answer);
    } else {
        setShowScore(false);
        console.log(answer);

        // count the sum of quiz answers
        const values = Object.values(answer)
        setQuizScore(values.reduce((acc, val) => {
          return acc + val;
        }));
    };
}

// show the result of Quiz component
// useEffect(() => {
//   console.log(quizScore);
// }, [quizScore]);

  return (
    <Fragment>
      <MainPage />
      <UserData
        onNameChange={handleNameChange}
        onSurnameChange={handleSurnameChange}
        onDateChange={handleDateChange}
      />
      <Quiz 
        onQuestionChange={nextQuestionHandler}
        onAnswerCheck={answerHandler}
        onCurrentQuestion={currentQuestion}
        onShowScore={showScore}
      />
      <MusicQuiz />
      <Result 
        name={name}
        surname={surname}
        date={date}
        questionQuizScore={quizScore}
        audioQuizScore={undefined}
        />
    </Fragment>
    );
};

export default App;