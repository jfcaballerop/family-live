import React from 'react';
import { Route, Switch } from 'wouter';
import Home from 'pages/Home';
import Login from 'pages/Login';
import { UserContextprovider } from 'context/UserContext';
const Pages = () => {
    return (
        <Switch>
            <UserContextprovider>

                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
            </UserContextprovider>
        </Switch>
    );
};
export default Pages;