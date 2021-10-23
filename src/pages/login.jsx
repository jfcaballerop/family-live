import React, { useState } from 'react'
import '../assets/styles/login.scss'
import { doGPostLogin } from '../services'
export default function Login() {
    const [email, setemail] = useState([]);
    const [pass, setpass] = useState([]);

    function handleSubmit(event) {
        console.log("Submit");
        event.preventDefault();
        let user = {}
        try {
            user = doGPostLogin({ email, pass })
        } catch (error) {
            alert(error)
        }
        alert(JSON.stringify(user))

    }

    function validateForm() {
        return email.length > 0 && pass.length > 0;
    }
    return (
        <div className="container">
            <div className="login-logo">
            </div>
            <div className="login-page">
                <div className="form">
                    {/* <form className="register-form">
                        <input type="text" placeholder="name" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="email address" />
                        <button>create</button>
                        <p className="message">Already registered? <a href='#'>Sign In</a></p>
                    </form> */}
                    <form onSubmit={handleSubmit} className="login-form">
                        <input type="email" placeholder="username or email" value={email} onChange={(e) => setemail(e.target.value)} />
                        <input type="password" placeholder="password" value={pass} onChange={(e) => setpass(e.target.value)} />
                        <button disabled={!validateForm()}>login</button>
                        <p className="message">Not registered? <a href='#'>Create an account</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
