import React from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { redirect } from "react-router-dom";

const LoginForm = () => {

    function verifica() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        fetch(`http://localhost:5000/login?username=${username}`)
            .then(res => res.json())
            .then((result) => {
                if (result.length == 0) {
                    alert('User não existe!!');
                }
                else if (result[0].password === password) {
                    alert('OK!!');
                } else {
                    alert('Errado!!');
                }
            })
    }

    return (
        <div>
            <p></p>
            <div className="wrapper">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" id="username" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" id="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <div><input type="checkbox" />Remember me</div>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit" onClick={verifica}>Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <a href="#">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;