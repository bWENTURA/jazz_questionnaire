import {React, Fragment, useState} from "react";
import {MdExpandMore, MdExpandLess} from 'react-icons/md';
import './Quiz.css';

const Quiz = () => {

    const [expand, setExpand] = useState(false);

    // changin visibility of section
    const expandMoreHandler = () => {
        setExpand(false)
    };

    const expandLessHandler = () => {
        setExpand(true)
    };

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
                    <div className="container-tittle">    
                        <h2>Questions</h2>
                        <button className="expand-more-button" onClick={expandLessHandler}>
                            <MdExpandLess className="expand-more-button-component"/>
                        </button>
                    </div>

                    <form className="form-container" >
                        <div className="question">
                            <p>1. What kind of action you prefer?</p>
                            <div>
                                <input type="radio" name="q1" value="A" checked/>
                                <label>Improvised</label>
                            </div>
                            <div>
                                <input type="radio" name="q1" value="B" checked/>
                                <label>Well-Planed</label>
                            </div>
                        </div>
                        <div className="question">
                            <p>2. What kind of music you prefer?</p>
                            <div className="question-answears">
                                <input type="radio" name="q2" value="A" checked/>
                                <label>Blues</label>
                                <input type="radio" name="q2" value="B" checked/>
                                <label>Dance</label>
                            </div>
                        </div>
                        <div className="question">
                            <p>3. Where you prefer listening to music?</p>
                            <div>
                                <input type="radio" name="q3" value="A" checked/>
                                <label>In completly smoked club at basement</label>
                            </div>
                            <div>
                                <input type="radio" name="q3" value="B" checked/>
                                <label>In Filharmony</label>
                            </div>
                        </div>
                        <div className="question">
                            <p>4. What is more important for You in music?</p>
                            <div>
                                <input type="radio" name="q4" value="A" checked/>
                                <label>Invoked emotions</label>
                            </div>
                            <div>
                                <input type="radio" name="q4" value="B" checked/>
                                <label>Perfectly played every notes </label>
                            </div>
                        </div>
                    </form>
                </section>}
        </Fragment>
    )
}

export default Quiz;