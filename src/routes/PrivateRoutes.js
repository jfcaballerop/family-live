import React from 'react'
import { Redirect, Route } from 'react-router'
import { isLogged } from 'services'

const PrivateRoutes = ({ component: Component, ...rest }) => {
	return (
		<Route {...rest} component={(props) => isLogged('privateRoutes') ? <Component {...props} /> : <Redirect to="/login" />} />
	)
}

export default PrivateRoutes
