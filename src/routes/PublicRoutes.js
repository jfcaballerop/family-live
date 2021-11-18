import React from 'react'
import { Redirect, Route } from 'react-router'
import { isLogged } from 'services'

const PublicRoutes = ({ component: Component, ...rest }) => {
	return (
		<Route {...rest} component={(props) => !isLogged() ? <Component {...props} /> : <Redirect to="/" />} />
	)
}

export default PublicRoutes
