import 'assets/styles/home.scss';
import Calendar from 'components/Calendar';
import React from 'react';
import News from './HomePages/News';
import Wellcome from './HomePages/Wellcome';



const Home = () => {
	return (
		<>
			<Wellcome></Wellcome>
			<News></News>
			<Calendar></Calendar>
		</>
	)
}
export default Home;