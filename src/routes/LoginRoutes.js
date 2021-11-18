import Login from 'pages/Login'
import Register from 'pages/Register'
import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'
import AppRoutes from './AppRoutes'

const LoginRoutes = () => {
	return (
		<Router>
			<AppRoutes></AppRoutes>
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />

				<Route exact path="/" component={Login} />
			</Switch>
		</Router>
	)
}

export default LoginRoutes
