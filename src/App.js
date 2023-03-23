import {React, Fragment} from 'react';
import 'animate.css';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import UserData from './components/Sections/UserData';
import Quiz from './components/Sections/Quiz';
import Result from './components/Sections/Result';
import MusicPlayer from './components/Sections/MusicPlayer';

const App = () => {
  return (
    <Fragment>
      <MainPage />
      <UserData />
      <Quiz />
      <Result />
      <MusicPlayer />
    </Fragment>
    );
};

export default App;
