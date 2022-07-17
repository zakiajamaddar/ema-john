import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import "./Login.css"

const Login = () => {
    const {user,signInUsingGoogle} = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location .state?.from || '/shop'

    const handleGoogleLogin = ()=>{
        signInUsingGoogle()
        .then (result=>{
           history.push(redirect_uri)
        })
    }
    return (
        <div className ="login-form">
            <div>
                <form onSubmit = "">
                    <input type = "email" name = "" id = "" placeholder = "Your Email"></input>
                    <br></br>
                    <input type = "password" name = "" id = ""></input>
                    <br></br>
                    <input type = "submit" value = "Submit"></input>

                </form>

                <p>New To Ema John ? <Link to = "/register">Create Account </Link>
                </p>

                <div>.............or........</div>
                <button 
                className = "btn-regular"
                onClick = {handleGoogleLogin}
                
                >GooGle Sign In </button>
            </div>
        </div>
    );
};

export default Login;