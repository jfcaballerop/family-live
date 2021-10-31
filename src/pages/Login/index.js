import React, { useContext, useState } from 'react'
import 'assets/styles/login.scss'
import { doGPostLogin } from 'services'
import { useLocation } from 'wouter';
import UserContext from 'context/UserContext'

export default function Login(props) {
    const [state, setState] = useState({
        email: '',
        password: ''
    });
    const [path, pushLocation] = useLocation()
    const { user, setuser } = useContext(UserContext)

    function handleChange(e) {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        const userLogin = { email: state.email, password: state.password }
        console.log(userLogin);
        let user
        try {
            user = doGPostLogin(userLogin)
            console.log(user);
            // Añado user al Contexto
            setuser(user)
            // alert(JSON.stringify(user))
            pushLocation('/home')
        } catch (error) {
            alert(error)
        }


    }

    function validateForm() {
        return state.email.length > 0 && state.password.length > 0;
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
                        <input type="email" id="email" placeholder="username or email" value={state.email} onChange={handleChange} />
                        <input type="password" id="password" placeholder="password" value={state.password} onChange={handleChange} />
                        <button disabled={!validateForm()}>login</button>
                        <p className="message">Not registered? <a href='#'>Create an account</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
