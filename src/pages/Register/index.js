import useForm from 'hooks/useForm';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
	const { state, handleChange, handleSubmit } = useForm()

	const { errors } = state;
	return (
		<div className="container-login">
			<div className="login-logo">
			</div>
			<div className="login-page">
				<div className="form">
					<form onSubmit={handleSubmit} className="register-form">
						<input type="text" id="username" placeholder="username" value={state.username} onChange={handleChange} noValidate />
						{errors.username.length > 0 && <span className='error'>* {errors.username}</span>}
						<input type="email" id="email" placeholder="email address" value={state.email} onChange={handleChange} noValidate />
						{errors.email.length > 0 && <span className='error'>* {errors.email}</span>}
						<input type="password" id="password" placeholder="password" value={state.password} onChange={handleChange} noValidate />
						{errors.password.length > 0 && <span className='error'>* {errors.password}</span>}
						<button >create</button>
						<p className="message">Already registered? <Link to="/login">Login</Link></p>
					</form>
				</div>
			</div>
		</div>
	)
}
