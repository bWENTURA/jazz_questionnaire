import {Fragment, React, useEffect, useState, useRef}from "react";
import {MdExpandMore, MdExpandLess} from 'react-icons/md';
import {validName, validSurname, validEmail, validPhone, validDate} from '../../validation/RegEx'
import './UserData.css';

const UserData = ({onNameChange, onSurnameChange, onDateChange, onGenderChange, onEmailChange, onPhoneChange, onCountryChange, onJobChange}) => {
    // input states
    const [inputName, setInputName] = useState('')
    const [inputSurname, setInputSurname] = useState('')
    const [inputDate, setInputDate] = useState('')
    const [inputSelectedGender, setInputSelectedGender] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputPhone, setInputPhone] = useState('')
    const [inputCountry, setInputCountry] = useState('')
    const [inputJob, setInputJob] = useState('')
    
    const [expand, setExpand] = useState(false);
    const [job, setJob] = useState(true);
    const [musician, setMusician] = useState(true);
    const [avatar, setAvatar] = useState([]);
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [countries, setCountries] = useState([]);
    // validation states
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const initialErrors = {name: "", surname: "", date: "", email: "", phonenumber: ""}
    const [formErrors, setFormErrors] = useState(initialErrors);
    const refInputName = useRef(null);
    const refInputSurname = useRef(null);
    const refInputDate = useRef(null);
    const refInputEmail = useRef(null);
    const refInputPhone = useRef(null);

    /* 
        VALIDATION OF FORMS
    */

    useEffect(() => {
        const refNameStyle = refInputName.current.style;
        const refSurnameStyle = refInputSurname.current.style;
        const refDateStyle = refInputDate.current.style;
        const refEmailStyle = refInputEmail.current.style;
        const refPhoneNumberStyle = refInputPhone.current.style;
        // Button Validation
        if(inputName.length > 2){
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }

        //  NAME
        if(validName.test(inputName)){
            setFormErrors(prevFormErrors => ({...prevFormErrors, name: ""}))
            refNameStyle.border = '3px solid var(--c-main)'
        } else if (!validName.test(inputName) && inputName !== "") {
            setFormErrors(prevFormErrors => ({...prevFormErrors, name: "Min. 3, and only letters."}))
            refNameStyle.border = '3px solid red'
        } else if (inputName.length === 0) {
            setFormErrors(prevFormErrors => ({...prevFormErrors, name: ""}))
            refNameStyle.border = '3px solid var(--c-main)'
        }

        // SURNAME
        if(validSurname.test(inputSurname)){
            setFormErrors(prevFormErrors => ({...prevFormErrors, surname: ""}))
            refSurnameStyle.border = '3px solid var(--c-main)'
        } else if (!validSurname.test(inputSurname) && inputSurname !== "") {
            setFormErrors(prevFormErrors => ({...prevFormErrors, surname: "Min. 3, and only letters."}))
            refSurnameStyle.border = '3px solid red'
        } else if (inputSurname.length === 0) {
            setFormErrors(prevFormErrors => ({...prevFormErrors, surname: ""}))
            refSurnameStyle.border = '3px solid var(--c-main)'
        }

        // DATE
        if(inputDate === "") {
            setFormErrors(prevFormErrors => ({...prevFormErrors, date: ""}))
            refDateStyle.border = '3px solid var(--c-main)'
        } else if(validDate.test(inputDate)){
            setFormErrors(prevFormErrors => ({...prevFormErrors, date: ""}))
            refDateStyle.border = '3px solid var(--c-main)'
        } else {
            setFormErrors(prevFormErrors => ({...prevFormErrors, date: "Please, select day, month and year."}))
            refDateStyle.border = '3px solid red'
        }

        // EMAIL
        if(validEmail.test(inputEmail)) {
            setFormErrors(prevFormErrors => ({...prevFormErrors, email: ""}))
            refEmailStyle.border = '3px solid var(--c-main)'
        } else if (!validEmail.test(inputEmail) && inputEmail !== "") {
            setFormErrors(prevFormErrors => ({...prevFormErrors, email: "Please, write valid email adress."}))
            refEmailStyle.border = '3px solid red'
        } else if (inputEmail.length === 0) {
            setFormErrors(prevFormErrors => ({...prevFormErrors, email: ""}))
            refEmailStyle.border = '3px solid var(--c-main)'
        }

        // PHONE
        if(validPhone.test(inputPhone)) {
            setFormErrors(prevFormErrors => ({...prevFormErrors, phonenumber: ""}))
            refPhoneNumberStyle.border = '3px solid var(--c-main)'
        } else if (!validPhone.test(inputPhone) && inputPhone !== "") {
            setFormErrors(prevFormErrors => ({...prevFormErrors, phonenumber: "Please, write valid phone number, eg. 000-000-000."}))
            refPhoneNumberStyle.border = '3px solid red'
        } else if (inputPhone.length === 0) {
            setFormErrors(prevFormErrors => ({...prevFormErrors, phonenumber: ""}))
            refPhoneNumberStyle.border = '3px solid var(--c-main)'
        }


    }, [inputName, inputSurname, inputDate, inputEmail, inputPhone])
    

    /* 
        UPDATING INPUTS
    */

    // passing datas in form
    const nameChangeHandler = (event) => {  
        const name = event.target.value;  
        // sending data from input
        setInputName(name)        
    };

    const surnameChangeHandler = (event) => {
        // validation of form

        setInputSurname(event.target.value)
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
    };

    const genderChangeHandler = (event) => {
        setInputSelectedGender(event.target.value)
    }

    const emailChangeHandler = (event) => {
        setInputEmail(event.target.value)
    }

    const phoneChangeHanler = (event) => {
        setInputPhone(event.target.value)
    }

    const countryChangeHandler = (event) => {
        setInputCountry(event.target.value)
    }

    const jobChangeHandler = (event) => {
        setInputJob(event.target.value)
    } 

    // changin visibility of section
    const expandMoreHandler = () => {
        setExpand(false)
    };

    const expandLessHandler = () => {
        setExpand(true)
    };

    // passing job - button action
    const MusicianHandler = (event) => {
        event.preventDefault();
        setMusician(false);
        onJobChange(event.target.value)
    }

    const NonMusicianHandler = (event) => {
        event.preventDefault();
        setJob(false);
    };

    /*
      BUTTON HANDLER
    */
    const onButtonHandler = () => {
        // sending data from inputs
        onNameChange(inputName);
        onSurnameChange(inputSurname);
        onDateChange(inputDate);
        onGenderChange(inputSelectedGender);;
        onEmailChange(inputEmail);
        onPhoneChange(inputPhone);
        onCountryChange(inputCountry);
        onJobChange(inputJob);

        // closing current component
        // setExpand(true)

        // srolling effect
        window.scrollTo({
            top: window.scrollY + 350,
            behavior: 'smooth'
        })
    }

    // avatars fetching
    const avatarNames = ['Snuggles', 'Zoe', 'Mittens']
    const imageUrl = 'https://api.dicebear.com/7.x/bottts/svg?seed=';

    useEffect(() => {
        const fetchAvatar = async () => {
            try {
                const avatarPromise = avatarNames.map(name => {
                    return fetch(`${imageUrl}${name}`)
                        .then(response => response.text())
                        .catch(err => console.log(err))
            })
                // we wait for completed all API fetching
                const avatarAll = await Promise.all(avatarPromise);
                setAvatar(avatarAll);
            } catch (error) {
                console.error('Error fetching avatars:', error);
            }

        }
        // console.log("infinity loop detector")
        fetchAvatar()
    });
    
    // fetch country
    const url = 'https://restcountries.com/v3.1/all';

    useEffect(() => {
        const fetchCountry = async () => { 
            try {
                const response = await fetch(url);
                const result = await response.json();
                const countriesName = result.map(item => item.name.common)
                setCountries(countriesName.sort()) 
                // console.log(countries)
            } catch (error) {
                console.error(error);
            } 
        };
        fetchCountry()
    },[])
        



  const handleAvatarClick = (event, index) => {
    event.preventDefault();
    setSelectedAvatar(index)
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
                        <h3 className="form-instruction__task">Hello!<br></br> Welcome in my jazz quiz. Let's check, how much you fit on being jazz musician.<br></br> First of all, please enter your data!</h3>
                        <p className="form-instruction__required">* required</p>
                    </div>
                    <form className="form">
                        <div className="form-row-one">
                            <div className="form-name">
                                <label>Name*</label>
                                <input type="text" 
                                        ref={refInputName} 
                                        placeholder=" Name" 
                                        className="input" 
                                        value={inputName} 
                                        onChange={nameChangeHandler}/>
                                <p>{formErrors.name}</p>
                            </div>
                            <div className="form-surname">
                                <label>Surname</label>
                                <input type="text" 
                                        ref={refInputSurname} 
                                        placeholder=" Surname" 
                                        className="input" 
                                        value={inputSurname} 
                                        onChange={surnameChangeHandler} />
                                <p>{formErrors.surname}</p>
                            </div>
                            <div className='form-date'>
                                <label>Birth Date</label>
                                <input type="date" 
                                        ref={refInputDate} 
                                        min="1940-01-01" 
                                        step="2023-05-22" 
                                        className="input" 
                                        value={inputDate} 
                                        onChange={dateChangeHandler}/>
                                <p>{formErrors.date}</p>
                            </div>
                            <div className="form-gender">
                                <label>Gender</label>
                                <select className="form-gender__select" value={inputSelectedGender} onChange={genderChangeHandler}>
                                    <option hidden>Select Your Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-avatar">
                                <label>Choose your avatar!</label>
                                <div className="form-avatar__items">
                                    {avatar.map((svg, index) => (
                                        <button 
                                            className={`form-avatar__button ${selectedAvatar === index ? 'selected' : ''}`}
                                            onClick={(event) => handleAvatarClick(event, index)} 
                                            // onClick={handleAvatarClick}
                                            key={index}
                                            // id={`avatar-${index + 1}`} 
                                        >
                                            <div 
                                                className="form-avatar__img"
                                                style={{backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`}}
                                                alt={`Avatar ${index}`}
                                            >
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="form-row-two">
                            <div className="form-email">
                                <label>Email Address</label>
                                <input type="text"
                                        ref={refInputEmail} 
                                        placeholder=" email@email.xxx" 
                                        className="input" 
                                        value={inputEmail}
                                        onChange={emailChangeHandler}/>
                                <p>{formErrors.email}</p>
                            </div>
                            <div className="form-phone">
                                <label>Phone Number</label>
                                <input type="text"
                                        ref={refInputPhone} 
                                        placeholder=" xxx-xxx-xxx" 
                                        className="input" 
                                        value={inputPhone} 
                                        onChange={phoneChangeHanler}/>
                                <p>{formErrors.phonenumber}</p>
                            </div>
                            <div className="form-country">
                                <label>Country</label>
                                <select className="form-country__select" value={inputCountry} onChange={countryChangeHandler}>
                                    <option hidden>Select Country</option>
                                    {countries.map((country, index) => {
                                        return (
                                            <option key={index} value={country}>
                                                {country}
                                            </option>
                                        )
                                    })};
                                </select>
                            </div>
                            <div className="form-job">
                                {musician ?
                                    <Fragment>
                                        {job ?
                                            <Fragment>
                                                <label>Are you a musician?</label> 
                                                <div className="form-job__buttons">
                                                    <button onClick={MusicianHandler} value='Musician'>Yes</button>
                                                    <button onClick={NonMusicianHandler}>No</button>
                                                </div>
                                            </Fragment>
                                        :
                                            <Fragment>
                                                <label>Job</label>
                                                <select className="form-job__selector" value={inputJob} onChange={jobChangeHandler}>
                                                    <option hidden>Select Your Job</option>
                                                    <option value='Lawyer'>Lawyer</option>
                                                    <option value='Athlete'>Athlete</option>
                                                    <option value='Doctor'>Doctor</option>
                                                    <option value='Own Buisness'>Own Buisness</option>
                                                    <option value='Other'>Other</option>
                                                </select>
                                            </Fragment>
                                        }
                                    </Fragment>
                                :
                                    <Fragment>
                                        <p>Maybe you are poor, but althought happy!</p>
                                    </Fragment>
                                }
                            </div>
                        </div>
                    </form> 
                    <div className={buttonDisabled ? 'button-container__data button-disabled' : 'button-container__data'}>
                        <button onClick={onButtonHandler} disabled={buttonDisabled}>Enter Data!</button>
                    </div>
                </section>
                }
        </ Fragment>
    )
};

export default UserData;