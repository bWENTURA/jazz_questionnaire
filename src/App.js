import {React, Fragment} from 'react';
import 'animate.css';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import UserData from './components/Sections/UserData';
import Quiz from './components/Sections/Quiz';
import Result from './components/Sections/Result';
import MusicQuiz from './components/Sections/MusicQuiz';

const App = () => {
  return (
    <Fragment>
      <MainPage />
      <UserData />
      <Quiz />
      <MusicQuiz />
      <Result />
    </Fragment>
    );
};

export default App;
