import 'assets/styles/home.scss'
import React, { useContext } from 'react';
import NavBar from 'components/NavBar'
import UserContext from 'context/UserContext';



const Home = () => {
    const { user, setuser } = useContext(UserContext)
    return (
        <div className='Principal'>
            <NavBar></NavBar>
            <h1>Family Live App</h1>
            <p>Wellcome {user.user}</p>
        </div>
    );
};
export default Home;