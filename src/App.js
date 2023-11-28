import {React, Fragment, useState, useEffect} from 'react';
// import {useEffect} from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import UserData from './components/Sections/UserData';
import Quiz from './components/Sections/Quiz';
import Result from './components/Sections/Result';
import MusicQuiz from './components/Sections/MusicQuiz';
import questions from './data/questions.json';
import songsData from './data/songsData.json'

const App = () => {
  // below hooks for UserData component
  // const [name, setName] = useState(localStorage.getItem('name'));
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [date, setDate] = useState('');
  const [selectedGender, setSelectedGender] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedJob, setSelectedJob] = useState('')
  // below hooks for Quiz component
  const [showScore, setShowScore] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // below useState will store value of checkded input
  const [selectedInput, setSelectedInput] = useState(0);
  // hook which store the answers
  const [answer, setAnswer] = useState({})
  const [quizScore, setQuizScore] = useState('');
  // hooks for Music Quiz
  const [checkValue, setCheckValue] = useState(songsData)
  const [audioQuizScore, setAudioQuizScore] = useState('');
  // checkbox validation
  const [checkedSum, setCheckedSum] = useState(0);
  const [disabledMusiqQuizButton, setDisabledMusiqQuizButton] = useState(true);
  // LIGHT / DARK MODE
  const [isLightMode, setIsLightMode] = useState(false);

  /*
      USER DATA
  */ 
  const handleNameChange = (value) => {
    setName(value);
    localStorage.setItem('name', value)
  };

  const handleSurnameChange = (value) => {
    setSurname(value);
    localStorage.setItem('surname', value)
  };

  const handleDateChange = (value) => {
    setDate(value)
    localStorage.setItem('date', date)
  };

  const handleGenderSelection = (value) => {
    setSelectedGender(value)
  }

  const handleEmailChange = (value) => {
    setEmail(value);
  }

  const handlePhoneChange = (value) => {
    setPhone(value)
  }

  const handleCountryChange = (value) => {
    setSelectedCountry(value)
  }

  const handleJobSelection = (value) => {
    setSelectedJob(value)
  }

  // const onClick = (value) => {
  //   setName(value);
  //   setSurname(value);
  //   setDate(value)
  //   setSelectedGender(value)
  //   setEmail(value);
  //   setPhone(value)
  //   setSelectedCountry(value)
  //   setSelectedJob(value)
  // }
  /*
      QUIZ
  */
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
  
  /*
      MUSIC QUIZ
  */

  // setCheckValue returns new object, with changed (if checkbox.title === checkboxTitle)
  // value of checked on true and rest of keys with no changes(spread operator);
  //  else, return not-changed object;

  const checkHandler = (e) => {
    const checkboxTitle = e.target.title;
    setCheckValue((prevValues) => 
        prevValues.map((checkbox) => 
        checkbox.title === checkboxTitle ? {...checkbox, checked: e.target.checked } : checkbox
        )
    );

    // check's validation
    const isChecked = e.target.checked;
    setCheckedSum((prevSum)=> 
      (isChecked ? prevSum + 1 : prevSum - 1)
    )
  };

  // MusiqQuiz Button Validation
  useEffect(() => {
    if(checkedSum === 3) {
      setDisabledMusiqQuizButton(false)
    } else {
        setDisabledMusiqQuizButton(true)
      }
  },[checkedSum])

  // this func sum values of checked checkbox
  const sumHandler = () => {
      let sum = 0;
      checkValue.forEach((checkbox) => {
          if (checkbox.checked === true) {
              sum += checkbox.value;
          }
      });
      return setAudioQuizScore(sum);
  };

  // manipulating of documen.title
  useEffect(() => {
    setTimeout(() => {
      if (name.trim() !== '') {
        document.title = `Jazz Questionnaire by ${name}`;
      }
    }, 3000)
  }, [name]);

  // check's validation

  /*
      DARK MODE 
  */
  
  // function changing the set of colors
  const toggleDarkMode = () => {
    setIsLightMode(!isLightMode);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isLightMode) {
      root.style.setProperty('--c-main', '#2779a7');
      root.style.setProperty('--c-secondary', '#008a66');
      root.style.setProperty('--c-secondary__shadow', '#008a657a');
      root.style.setProperty('--c-dark', '#333');
      root.style.setProperty('--c-white', '#f8f4e9');
      root.style.setProperty('--c-background', '#efe2ba');
      root.style.setProperty('--c-background-task', '#008a66')
      root.style.setProperty('--c-background-dark', '#f7d7b5');
      root.style.setProperty('--c-background-input', 'rgba(253, 253, 253, 0.685)');
    } else {
      root.style.setProperty('--c-main', '#f8f4e9');
      root.style.setProperty('--c-secondary', '#f8f4e9');
      root.style.setProperty('--c-secondary__shadow', '#333');
      root.style.setProperty('--c-dark', '#f8f4e9');
      root.style.setProperty('--c-white', '#333');
      root.style.setProperty('--c-background', '#333');
      root.style.setProperty('--c-background-task', '#333')
      root.style.setProperty('--c-background-dark', '#f8f4e9');
      root.style.setProperty('--c-background-input', '#f8f4e9');
    }
  }, [isLightMode]);

  return (
    <Fragment>
    <div className={`App ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <MainPage onModeHandler={toggleDarkMode}/>
      <UserData
        onNameChange={handleNameChange}
        onSurnameChange={handleSurnameChange}
        onDateChange={handleDateChange}
        onGenderChange={handleGenderSelection}
        onEmailChange={handleEmailChange}
        onPhoneChange={handlePhoneChange}
        onCountryChange={handleCountryChange}
        onJobChange={handleJobSelection}
      />
      <Quiz 
        userName={name}
        onQuestionChange={nextQuestionHandler}
        onAnswerCheck={answerHandler}
        onCurrentQuestion={currentQuestion}
        onShowScore={showScore}
      />
      <MusicQuiz
        userName={name}
        onSongData={checkValue}
        onCheckHandler={checkHandler}
        onSumHandler={sumHandler}
        disabledMusiqQuizButton={disabledMusiqQuizButton}
      />
      <Result 
        name={name}
        surname={surname}
        date={date}
        gender={selectedGender}
        email={email}
        phone={phone}
        country={selectedCountry}
        job={selectedJob}
        questionQuizScore={quizScore}
        audioQuizScore={audioQuizScore}
        />
    </div>    
    </Fragment>
    );
  };

export default App;