import 'assets/styles/home.scss'
import React from 'react';
import NavBar from 'components/NavBar'


const Home = () => {
    return (
        <div className='Principal'>
            <NavBar></NavBar>
            <h1>Family Live App</h1>
            <p>This is home page</p>
        </div>
    );
};
export default Home;