import 'assets/styles/home.scss'
import React from 'react';
import NavBar from 'components/NavBar'
import Wellcome from './HomePages/Wellcome';
import News from './HomePages/News';
import { isLogged } from 'services'
import { Redirect } from 'wouter';
import { useLocation } from 'wouter';



const Home = () => {
    const [location, setLocation] = useLocation();

    if (isLogged()) {
        return (

            <div className='Principal'>

                <div className='leftSide'>

                </div>
                <div className='centerContent'>
                    <NavBar></NavBar>
                    <Wellcome></Wellcome>
                    <News></News>

                </div>
                <div className='rightSide'>

                </div>
            </div>
        )
    } else {
        // setLocation("/Login")
        return <Redirect to="/Login"></Redirect>
    }
};
export default Home;