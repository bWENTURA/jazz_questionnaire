import {Fragment, React, useState}from "react";
import {MdExpandMore, MdExpandLess} from 'react-icons/md';
import './UserData.css';

const UserData = ({onNameChange, onSurnameChange, onDateChange}) => {

    const [expand, setExpand] = useState(false);

    // entering datas in form
    const nameChangeHandler = (event) => {
        onNameChange(event.target.value);
    };

    const surnameChangeHandler = (event) => {
        onSurnameChange(event.target.value);
    };

    const dateChangeHandler = (event) => {
        onDateChange(event.target.value);
    };

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
                <section id="data" className='container'>
                    <div className="data-container-tittle">    
                        <h2>User Date</h2>
                        <button className="expand-more-button" onClick={expandMoreHandler}>
                            <MdExpandMore />
                        </button>
                    </div>
                </ section>
                :    
                <section id="data" className='container'>
                    <div className="data-container-tittle">    
                        <h2>User Data</h2>
                        <button className="expand-more-button" onClick={expandLessHandler}>
                            <MdExpandLess className="expand-more-button-component"/>
                        </button>
                    </div>
                    <div className="form-instruction">
                        <h3 className="form-instruction__item">Please, enter your data!</h3>
                    </div>
                    <form className="form">
                        <div className="form-name">
                            <label>Name</label>
                            <input type="text" onChange={nameChangeHandler} />
                        </div>
                        <div className="form-surname">
                            <label>Surname</label>
                            <input type="text" onChange={surnameChangeHandler} />
                        </div>
                        <div className='form-date'>
                            <label>Birth Date</label>
                            <input type="date" min="1940-01-01" step="2023-05-22" onChange={dateChangeHandler}/>
                        </div>
                    </form>
                    <div className="button-container__data">
                        <button>Enter Data!</button>
                    </div>
                </section>
                }
        </ Fragment>
    )
};

export default UserData;