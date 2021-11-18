import NavBar from 'components/NavBar'
import Home from 'pages/Home'
import Notes from 'pages/Notes'
import React from 'react'
import {
	Route, Switch
} from 'react-router-dom'
const AppRoutes = () => {
	return (
		<>
			<NavBar></NavBar>
			<Switch>
				<Route exact path="/home" component={Home} />
				<Route exact path="/notes" component={Notes} />
			</Switch>
		</>
	)
}

export default AppRoutes
