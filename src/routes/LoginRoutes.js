import Login from 'pages/Login'
import Register from 'pages/Register'
import React from 'react'
import {
	BrowserRouter as Router,
	Switch
} from 'react-router-dom'
import AppRoutes from './AppRoutes'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const LoginRoutes = () => {

	return (
		<Router>
			<Switch>
				<PublicRoutes path="/login" component={Login} />
				<PublicRoutes path="/register" component={Register} />
				<PrivateRoutes path="/" component={AppRoutes} />
			</Switch>
		</Router>
	)
}

export default LoginRoutes
