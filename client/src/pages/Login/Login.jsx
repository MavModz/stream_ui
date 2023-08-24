
import { useState, useEffect } from "react";
import React from 'react';
import { auth, provider } from "../../firebase";
import { signInWithPopup } from 'firebase/auth';
import Dashboard from "../Dashboard/Dashboard";
import logo from "../../Components/assets/logo.png";
import { Link } from "react-router-dom";
import "./Login.css";
import GoogleButton from 'react-google-button';
// import googleicon from "../../Components/assets/google.svg"

const Login = () => {
    const [email, setEmail] = useState('');
    const handleclick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setEmail(data.user.email);
            sessionStorage.setItem('email', data.user.email);

        });
    }
    useEffect(() => {
        sessionStorage.getItem('email');

    }, [setEmail]);

    return (
        <>
            {/* Header Start */}
            <div className="container">
                <div className="header">
                    {/* Logo Start  */}
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    {/* Logo End  */}

                    {/* Menubar start  */}
                    <div className="menubar">
                        <ul className="navbar">
                            <li className="menulist">

                                <Link to="/" className="lists">Home</Link>
                            </li>
                            <li className="menulist">

                                <Link to="/" className="lists">Join</Link>
                            </li>
                        </ul>
                    </div>
                    {/* menubar end  */}
                </div>
                {/* Body Start  */}

                <div className="payloader">
                    <div className="content">
                        <div className="heading">
                            <h1>Hello Designer</h1><br />
                            <p >Welcome to Streaming App</p>
                        </div>
                        <div className="field">
                            <div className="emailid">
                                <input type="email" name="email" id="email" placeholder="Email" />
                            </div>
                            <div className="password">
                                <input type="password" name="password" id="password" placeholder="Password" />
                            </div>
                            <div className="forgot">
                                <Link to="/forgot" id="forgotp">Forgot Password?</Link>
                            </div>
                            <div className="or">
                                <p>or</p>
                            </div>
                            <div className="login-with-google">
                                {email ? <Dashboard /> :
                                    <GoogleButton onClick={handleclick} id="google"/>}
                            </div>
                            <div className="login-button">
                                <input type="submit" value="Login" name="submit"/>
                            </div>
                            
                            <div className="singin">
                                Don't have an account?{" "}<Link to="/singin">Sign Up Now!</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Body End  */}
            </div>


        </>
// import React, {useEffect, useState} from 'react';
// import { auth, provider } from "../../firebase";
// import { signInWithPopup } from 'firebase/auth';
// import Dashboard from "../Dashboard/Dashboard"

// function Login() {

//     const [value, setValue] = useState("")

//     const handleClick = () => {
//         signInWithPopup(auth, provider).then((data) => {
//             setValue(data.user.email);
//             localStorage.setItem("email", data.user.email)
//         })
//     }

//     useEffect(() => {
//         setValue(localStorage.getItem("email"))
//     }, [setValue ])

//     return (
//         <div className="container">
//             <div>Login</div>
//             {value ? <Dashboard /> : <button onClick={handleClick}>Google SignIn</button>}
            
//         </div>

    )
}

export default Login