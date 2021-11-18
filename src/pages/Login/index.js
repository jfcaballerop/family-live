import React, { useContext, useState } from 'react'
import 'assets/styles/login.scss'
import { doGPostLogin, isLogged, saveLocalStorage } from 'services'
import UserContext from 'context/UserContext'
import { USER_INFO_KEY } from 'configuration';
import { Link, useHistory, Redirect } from 'react-router-dom';

export default function Login(props) {
	const [state, setState] = useState({
		username: '',
		password: ''
	});
	const history = useHistory()
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
			// save user to local storage
			saveLocalStorage(USER_INFO_KEY, state.username)
			// Añado user al Contexto
			setuser(user)
			// alert(JSON.stringify(user))
			history.push('/home')
		} catch (error) {
			alert(error)
		}


	}

	function validateForm() {
		return state.username.length > 0 && state.password.length > 0;
	}
	return (
		isLogged() ?
			<Redirect to='/home' /> :
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
