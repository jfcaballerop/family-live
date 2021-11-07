import React from 'react';
import { Route, Switch } from 'wouter';
import { UserContextprovider } from 'context/UserContext';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';


const Pages = () => {
    return (
        <Switch>
            <UserContextprovider>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </UserContextprovider>
        </Switch>
    );
};
export default Pages;