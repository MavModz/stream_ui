import React from 'react';
import "./Register.css"

function Register() {
    return (
        <div className="register-container">
            <div className="register-wrapper">
                <div className="left-wrapper">
                    <span>Start For Free</span>
                    <h1>Create a New Account</h1>
                    <span>Already a Member</span>
                    <form className='form-wrapper'>
                        <div className="text-field">
                            <input type="text" name="fname" id="fna
                            
                            me" placeholder='First Name' />
                            <input type="text" name="lname" id="lname" placeholder='Last Name' />
                        </div>
                        <div className="text-field">
                            <input type="email" name="email" id="email" placeholder='Email' />
                        </div>
                        <div className="text-field">
                            <input type="password" name="password" id="password" placeholder='Password' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register