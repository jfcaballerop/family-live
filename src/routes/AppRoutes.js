import Home from 'pages/Home'
import Layout from 'pages/Layout'
import BodyLayout from 'pages/Layout/BodyLayout'
import Notes from 'pages/Notes'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
const AppRoutes = () => {
	return (
		<>
			<Layout>
				<BodyLayout>
					<Switch>
						<Route exact path="/home" component={Home} />
						<Route exact path="/notes" component={Notes} />

						<Redirect to="/home" />
					</Switch>
				</BodyLayout>
			</Layout>
		</>
	)
}

export default AppRoutes
