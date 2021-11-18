import 'assets/styles/home.scss';
import Calendar from 'components/Calendar';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { isLogged } from 'services';
import News from './HomePages/News';
import Wellcome from './HomePages/Wellcome';



const Home = () => {
	if (isLogged()) {
		return (

			<div className='Principal'>

				<div className='leftSide'>

				</div>
				<div className='centerContent'>
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