import React from 'react';
import "./Register.css"

function Register() {
    return (
        <div className="register-container">
            <h1>Register</h1>
            <div className="register-wrapper">
                <div className="left-wrapper">
                    <form className='form-wrapper'>
                        <div className="text-field">
                            <input type="text" name="fname" id="fname" placeholder='First Name'/>
                            <input type="text" name="lname" id="lname" placeholder='Last Name'/>
                        </div>
                        <div className="text-field">
                            <input type="email" name="email" id="email" placeholder='Email'/>
                        </div>
                        <div className="text-field">
                            <input type="password" name="password" id="password" placeholder='Password'/>
                        </div>
                    </form>
                </div>
                <div className="right-wrapper">
                    <p>testing right</p>
                </div>
            </div>
        </div>
    )
}

export default Register