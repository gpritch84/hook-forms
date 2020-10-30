import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [conPasswordError, setConPasswordError] = useState("")

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("First name is required!");
        } else if (e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters or longer!");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError("Last name is required!");
        } else if (e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters or longer!");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters or longer!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    }

    const handleConPassword = (e) => {
        setConPassword(e.target.value);
        if (e.target.value !== password){
            setConPasswordError("Password must match!");
        } else {
            setConPasswordError("");
        }
    }

        return (
            <>
                <div className="form-group d-flex justify-content-center">
                    <form onSubmit={createUser}>
                        <div>
                            <label>First Name: </label>
                            <input type="text" className="form-control" onChange={handleFirstName} />
                            {
                                firstNameError ?
                                    <p style={{ color: 'red' }}>{firstNameError}</p> : ''
                            }
                        </div>
                        <div>
                            <label>Last Name: </label>
                            <input type="text" className="form-control" onChange={handleLastName} />
                            {
                                lastNameError ?
                                    <p style={{ color: 'red' }}>{lastNameError}</p> : ''
                            }
                        </div>
                        <div>
                            <label>Email Address: </label>
                            <input type="text" className="form-control" onChange={handleEmail} />
                            {
                                emailError ?
                                    <p style={{ color: 'red' }}>{emailError}</p> : ''
                            }
                        </div>
                        <div>
                            <label>Password: </label>
                            <input type="text" className="form-control" onChange={handlePassword} />
                            {
                                passwordError ?
                                    <p style={{ color: 'red' }}>{passwordError}</p> : ''
                            }
                        </div>
                        <div>
                            <label>Confirm Password: </label>
                            <input type="text" className="form-control" onChange={handleConPassword} />
                            {
                                conPasswordError ?
                                    <p style={{ color: 'red' }}>{conPasswordError}</p> : ''
                            }
                        </div>
                        <input type="submit" className="m-3 btn btn-dark" value="Create User" />
                    </form>
                </div>
                <p><b>Your Form Data</b></p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
            </>
        );
    };

export default HookForm;