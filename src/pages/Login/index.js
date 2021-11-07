import React, { useContext, useState } from 'react'
import 'assets/styles/login.scss'
import { doGPostLogin } from 'services'
import { Link, useLocation } from 'wouter';
import UserContext from 'context/UserContext'

export default function Login(props) {
    const [state, setState] = useState({
        username: '',
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

    async function handleSubmit(event) {
        event.preventDefault();
        const userLogin = { username: state.username, password: state.password }
        console.log(userLogin);
        let user
        try {
            user = await doGPostLogin(userLogin)
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
        return state.username.length > 0 && state.password.length > 0;
    }
    return (
        <div className="container-login">
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
                        <input type="text" id="username" placeholder="username or email" value={state.username} onChange={handleChange} />
                        <input type="password" id="password" placeholder="password" value={state.password} onChange={handleChange} />
                        <button disabled={!validateForm()}>login</button>
                        <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
