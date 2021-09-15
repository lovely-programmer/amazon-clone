import React, { useState } from 'react'
import './Login.css'
import amazonLogo from './images/Amazon_logo.png'
import {Link, useHistory} from 'react-router-dom'
import {auth} from './firebase'

function Login() {
    const history = useHistory()
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault()  // prevent the page from refreshing when the submit button is clicked
        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push("/")
        })
        .catch(error => alert(error.message))
    }

    const register = (e) => {
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) =>  {
            // it successfully created a new user with email and password
            console.log(auth);
            if (auth) {
                history.push("/")
            }
        })
        // if there was an error
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
            <img className="login_logo" src={amazonLogo} alt="" />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input onChange={(e)=> {setEmail(e.target.value)}} type="email" value={email} />

                    <h5>Password</h5>
                    <input onChange={(e)=> {setPassword(e.target.value)}}  type="password" value={password} />

                    <button type="submit" onClick={signIn} className="login_signIn_button">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies notice and our Interest-Based Ads
                </p>

                <button onClick={register} className='login_signUp_button'>Create your Amazon Account</button>

            </div>
        </div>
    )
}

export default Login
