import UserContext from 'context/UserContext';
import React, { useContext, useState } from 'react'
import { doFBCreateUser } from 'services';
import { Link, useLocation } from 'wouter'

export default function Register() {
    const [state, setState] = useState({
        username: '',
        password: '',
        email: ''
    });
    const { user, setuser } = useContext(UserContext)
    const [path, pushLocation] = useLocation()

    function handleChange(e) {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    function validatePass(pass) {
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;



        if (pass.length < 8)
            return false
        if (!pass.match(lowerCaseLetters))
            return false
        if (!pass.match(upperCaseLetters))
            return false
        if (!pass.match(numbers))
            return false


        return true;

    }
    function validateForm() {
        return state.username.length > 0 && validatePass(state.password) && state.email.length > 0;
    }
    async function handleSubmit(event) {
        event.preventDefault();
        const userRegister = { username: state.username, password: state.password, email: state.email }
        console.log(userRegister);
        let user
        try {
            user = await doFBCreateUser(userRegister)
            console.log(user);
            // Añado user al Contexto
            setuser(user)
            // alert(JSON.stringify(user))
            pushLocation('/login')
        } catch (error) {
            alert(error)
        }


    }
    return (
        <div className="container-login">
            <div className="login-logo">
            </div>
            <div className="login-page">
                <div className="form">
                    <form onSubmit={handleSubmit} className="register-form">
                        <input type="text" id="username" placeholder="username" value={state.username} onChange={handleChange} />
                        <input type="password" id="password" placeholder="password" value={state.password} onChange={handleChange} />
                        <input type="email" id="email" placeholder="email address" value={state.email} onChange={handleChange} />
                        <button disabled={!validateForm()}>create</button>
                        <p className="message">Already registered? <Link to="/Login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
