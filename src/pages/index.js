import React from 'react';
import { Route, Switch } from 'wouter';
import Home from 'pages/Home';
import Login from 'pages/Login';
const Pages = () => {
    return (
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
        </Switch>
    );
};
export default Pages;