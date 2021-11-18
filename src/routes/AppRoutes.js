import Home from 'pages/Home'
import Layout from 'pages/Layout'
import BodyLayout from 'pages/Layout/BodyLayout'
import Notes from 'pages/Notes'
import React, { useEffect } from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import { isLogged } from 'services'
const AppRoutes = () => {
	const history = useHistory()
	useEffect(() => {
		if (!isLogged()) {
			history.replace('/login')
		}
	})

	return (
		<>
			<Layout>
				<Switch>
					<BodyLayout>
						<Route exact path="/home" component={Home} />
						<Route exact path="/notes" component={Notes} />
					</BodyLayout>
					<Redirect to="/home" />
				</Switch>
			</Layout>
		</>
	)
}

export default AppRoutes
