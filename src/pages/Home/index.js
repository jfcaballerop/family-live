import 'assets/styles/home.scss'
import React from 'react';
import NavBar from 'components/NavBar'
import Wellcome from './HomePages/Wellcome';
import News from './HomePages/News';
import { isLogged } from 'services'
import Calendar from 'components/Calendar';
import { Redirect } from 'react-router-dom';



const Home = () => {
	if (isLogged()) {
		return (

			<div className='Principal'>

				<div className='leftSide'>

				</div>
				<div className='centerContent'>
					<NavBar></NavBar>
					<Wellcome></Wellcome>
					<News></News>
					<Calendar></Calendar>
				</div>
				<div className='rightSide'>

				</div>
			</div>
		)
	} else {
		// setLocation("/Login")
		return <Redirect to="/login" />
	}
};
export default Home;