import {React, Fragment, useState} from 'react';
import 'animate.css';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import UserData from './components/Sections/UserData';
import Quiz from './components/Sections/Quiz';
import Result from './components/Sections/Result';
import MusicQuiz from './components/Sections/MusicQuiz';

const App = () => {

  const [name, setName] = useState('NAME');
  const [surname, setSurname] = useState('SURNAME');
  // const [date, setDate] = useState('');

  const handleNameChange = (value) => {
    setName(value);
  };
  const handleSurnameChange = (value) => {
    setSurname(value);
  };
  // const handleDateChange = (value) => {
  //   setDate(value)
  // };

  return (
    <Fragment>
      {/* <MainPage /> */}
      <UserData
        onNameChange={handleNameChange}
        onSurnameChange={handleSurnameChange}
        // onDateChange={handleDateChange}
      />
      {/* <Quiz /> */}
      {/* <MusicQuiz /> */}
      <Result 
        name={name}
        surname={surname}
        // date={date}
        />
    </Fragment>
    );
};

export default App;
