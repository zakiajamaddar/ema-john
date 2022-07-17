import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css"

const Register = () => {
    return (
        <div className = "login-form">
            <div>
                <h2>Register : Create Account </h2>
                <form onSubmit = "">
                    <input type ="email" name = "" id = "" placeholder = "Your Email"></input>
                    <br></br>
                    <input type = "password" name = "" id="" placeholder = "Your Password"></input>
                    <br></br>
                    <input type = "password" name = "" id = "" placeholder = "Re-enter Password"></input>
                    <br></br>
                    <input type = "submit" value = "Submit"></input>

                </form>

                <p> Already have an account?
                    
                    <Link to ="./login">Login</Link>
                </p>
                <div>.........or.......</div>
                <br></br>
                <button className = "btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;