import React, {useEffect, useState} from 'react';
import { auth, provider } from "../../firebase";
import { signInWithPopup } from 'firebase/auth';
import Dashboard from "../Dashboard/Dashboard"

function Login() {

    const [value, setValue] = useState("")

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            localStorage.setItem("email", data.user.email)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem("email"))
    }, [setValue ])

    return (
        <div className="container">
            <div>Login</div>
            {value ? <Dashboard /> : <button onClick={handleClick}>Google SignIn</button>}
            
        </div>

    )
}

export default Login