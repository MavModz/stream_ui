import { useState,useEffect } from "react";
import React from 'react';
import {auth,provider} from "../../firebase";
import { signInWithPopup } from 'firebase/auth';
import Dashboard from "../Dashboard/Dashboard";

const Login =() => {
    const [email , setEmail]  =useState('');
    const handleclick = () => {
        signInWithPopup(auth,provider).then((data)=>{
            setEmail(data.user.email);
            sessionStorage.setItem('email', data.user.email);
            
        });
    }
        useEffect(() =>{
            sessionStorage.getItem('email');
            
        },[setEmail]);
   
  return (
    <>
    {email? <Dashboard /> :<input type="button" value="SignWithGoogle" onClick={handleclick}/>}
    </>
  )
}

export default Login