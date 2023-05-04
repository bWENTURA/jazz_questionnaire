import {React, Fragment, useState} from "react";
import {MdExpandMore, MdExpandLess} from 'react-icons/md';
import './Quiz.css';

const Quiz = () => {

    const [expand, setExpand] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(true);

    // changin visibility of section
    const expandMoreHandler = () => {
        setExpand(false)
    };

    const expandLessHandler = () => {
        setExpand(true)
    };

    const onClickHandler = (event) => {
        event.preventDefault();
        if (currentQuestion + 1 < questions.length){
           setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(false)
        };
    }
    
    const questions = [
        {
        text: "1. What kind of action you prefer?",
          options: [
            { id: 0, name: 'q1', text: "Improvised", isCorrect: true },
            { id: 1, name: 'q1', text: "Well-Planed", isCorrect: false },
          ],
        },
        {
        text: "2. What kind of music you prefer?",
            options: [
          { id: 0, name: 'q2', text: "Blues", isCorrect: true },
          { id: 1, name: 'q2', text: "Dance", isCorrect: false },
        ],
        },
        {
        text: "3. Where you prefer listening to music?",
          options: [
            { id: 0, name: 'q3', text: "In completly smoked club at basement", isCorrect: true },
            { id: 1, name: 'q3', text: "In Filharmony", isCorrect: false },
          ],
        },
        {
        text: "4. What is more important for You in music?",
          options: [
            { id: 0, name: 'q4', text: "Invoked by music emotions", isCorrect: false },
            { id: 1, name: 'q4', text: "Perfectly played every notes", isCorrect: true },
          ],
        },
      ];

    return (
        <Fragment>
            {expand ? 
                <section className='container'>
                    <div className="container-tittle">    
                        <h2>Questions</h2>
                        <button className="expand-more-button" onClick={expandMoreHandler}>
                            <MdExpandMore />
                        </button>
                    </div>
                </ section>
            :
                <section className='container'>
                    <div className="container-title">    
                        <h2>Questions</h2>
                        <button className="expand-more-button" onClick={expandLessHandler}>
                            <MdExpandLess className="expand-more-button-component"/>
                        </button>
                    </div>
                    {showScore ?
                        <form className="form-container" >
                            <div className="question">
                                <h3 className="question-title">{questions[currentQuestion].text}</h3>
                                    {questions[currentQuestion].options.map(options => {
                                        return (
                                            <ul key={options.id}>
                                                <input className="question-input" name ={options.name} type="radio"/>
                                                <label className="question-label" key={options.id}>{options.text}</label>
                                            </ul>
                                        )
                                    })}
                            </div>
                            <div className="question-button">
                                <button type="submit" onClick={onClickHandler}>Submit checker only!</button>
                            </div>
                        </form>
                    :
                        <form className="form-container false" >
                            <div className="question">
                                <h3>Go to the music player section!</h3>
                            </div>
                        </form>
                    }
                </section>}
        </Fragment>
    )
}

export default Quiz;