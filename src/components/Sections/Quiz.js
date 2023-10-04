import {React, Fragment, useState} from "react";
import {MdExpandMore, MdExpandLess} from 'react-icons/md';
import './Quiz.css';
import questions from '../../data/questions.json';

// Questions in array
// const questions = [
//     {
//     text: "1. What kind of action you prefer?",
//         options: [
//         { id: 0, name: 'q1', text: "Improvised", checked: true, value: 2},
//         { id: 1, name: 'q1', text: "Well-Planed", checked: false, value: 0},
//       ],
//     },
//     {
//     text: "2. What kind of music you prefer?",
//         options: [
//       { id: 0, name: 'q2', text: "Blues", checked: true, value: 2 },
//       { id: 1, name: 'q2', text: "Dance", checked: false, value: 0 },
//     ],
//     },
//     {
//     text: "3. Where you prefer listening to music?",
//       options: [
//         { id: 0, name: 'q3', text: "In completly smoked club at basement", checked: true, value: 2 },
//         { id: 1, name: 'q3', text: "In Filharmony", checked: false, value: 0 },
//       ],
//     },
//     {
//     text: "4. What is more important for You in music?",
//       options: [
//         { id: 0, name: 'q4', text: "Invoked by music emotions", checked: true, value: 2 },
//         { id: 1, name: 'q4', text: "Perfectly played every notes", checked: false, value: 0 },
//       ],
//     },
//   ];

const Quiz = ({onQuestionChange, onAnswerCheck, onCurrentQuestion, onShowScore}) => {

    const [expand, setExpand] = useState(false);

    // changin visibility of section
    const expandMoreHandler = () => {
        setExpand(false)
    };

    const expandLessHandler = () => {
        setExpand(true)
    };    

    // const answerHandler = (event) => {
    //     setSelectedInput(event.target.value);
    //     // jeżeli masz zmienną, pod którą jest wartość liczbowa 0 (lub chyba też ujemne; mniej bądź równe 0) to boolean będzie false!!!
    //     if (currentQuestion !== null) {
    //       questions[currentQuestion].options.forEach(option => {
    //         setAnswer(prevAnswer => ({
    //           ...prevAnswer,
    //           [option.name]: Number(event.target.value),
    //         }));
    //       });
    //     } else {
    //       console.log('Something went wrong, my friend.');
    //     }
    //   };
    
    // // question changing functionality
    // const nextQuestionHandler = (event) => {
    //     event.preventDefault();
    //         console.log('Selected value: ', selectedInput);
    //     if (currentQuestion + 1 < questions.length){
    //         setCurrentQuestion(currentQuestion + 1)

    //         // reset input radio in next question and without influence on questions key 'checked'
    //         const input = document.querySelectorAll("input[type='radio']");
    //         input.forEach((input) => {
    //             input.checked = false;
    //         })
    //         console.log(answer);
    //     } else {
    //         setShowScore(false);
    //         console.log(answer);

    //     };
    // }

    return (
        <Fragment>
            {expand ? 
                <section id="quiz" className='container'>
                    <div className="quiz-container-title">    
                        <h2>Questions</h2>
                        <button className="expand-more-button" onClick={expandMoreHandler}>
                            <MdExpandMore />
                        </button>
                    </div>
                </ section>
            :
                <section id="quiz" className='container'>
                    <div className="quiz-container-title">    
                        <h2>Questions</h2>
                        <button className="expand-more-button" onClick={expandLessHandler}>
                            <MdExpandLess className="expand-more-button-component"/>
                        </button>
                    </div>
                    {onShowScore ?
                    <Fragment>
                        <form className="form-container" >
                            <div className="question">
                                <h3 className="question-title">{questions[onCurrentQuestion].text}</h3>
                                    {questions[onCurrentQuestion].options.map(options => {
                                        return (
                                            <ul key={options.id}>
                                                <input 
                                                    className="question-input" 
                                                    name ={options.name} 
                                                    type="radio"
                                                    id={options.id}
                                                    value = {options.value}
                                                    // checked={selectedInput===options.value.toString()} dzięki wyłączeniu tej opcji, użytkownik zmuszony jest do wybrania opcji
                                                    onChange={onAnswerCheck}
                                                />
                                                <label 
                                                    className="question-label" 
                                                    key={options.id}>
                                                    {options.text}
                                                </label>
                                            </ul>
                                        )
                                    })}
                            </div>
                            {/* <div className="question-button">
                                <button type="submit" onClick={onQuestionChange}>Next question please!</button>
                            </div> */}
                        </form>
                        <div className="button-container__quiz">
                            <button type="submit" onClick={onQuestionChange}>Enter Data!</button>
                        </div>
                    </Fragment>
                    :
                        <form className="form-container false" >
                            <div className="question">
                                <h3>Go to the music player section!</h3>
                            </div>
                        </form>
                     }
                </section>
            }
        </Fragment>
    )
}

export default Quiz;