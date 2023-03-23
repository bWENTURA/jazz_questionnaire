import {Fragment, React, useState}from "react";
import {MdExpandMore, MdExpandLess} from 'react-icons/md';
import './UserData.css';

const UserData = () => {

    const [expand, setExpand] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [date, setDate] = useState('');

    // entering datas in form
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const surnameChangeHandler = (event) => {
        setSurname(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    // changin visibility of section
    const expandMoreHandler = () => {
        setExpand(false)
    };

    const expandLessHandler = () => {
        setExpand(true)
    };

    // submit ---> in progress
    const onClickHandler = (e) => {
        e.preventDefault();
        console.log(name, surname, date)
        setName('');
        setSurname('');
        setDate('');
    };


    return (
        <Fragment>
            {expand ? 
                <section className='container'>
                    <div className="container-tittle">    
                        <h2>User Date</h2>
                        <button className="expand-more-button" onClick={expandMoreHandler}>
                            <MdExpandMore />
                        </button>
                    </div>
                </ section>
                :    
                <section className='container'>
                    <div className="container-tittle">    
                        <h2>User Date</h2>
                        <button className="expand-more-button" onClick={expandLessHandler}>
                            <MdExpandLess className="expand-more-button-component"/>
                        </button>
                    </div>
                <form className="form">
                    <div className="form-name">
                        <label>Name</label>
                        <input type="text" value={name} onChange={nameChangeHandler}/>
                    </div>
                    <div className="form-surname">
                        <label>Surname</label>
                        <input type="text" value={surname} onChange={surnameChangeHandler}/>
                    </div>
                    <div className='form-date'>
                        <label>Birth Date</label>
                        <input type="date" min="1940-01-01" step="2023-03-22" value={date} onChange={dateChangeHandler}/>
                    </div>
                    <button type="submit" onClick={onClickHandler}>Submit checker only!</button>

                </form>
                </section>
                }
        </ Fragment>
    )
};

export default UserData;