import React from 'react';
import { Route, Switch } from 'wouter';
import Home from './home';
import Login from './login';
const Pages = () => {
    return (
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
        </Switch>
    );
};
export default Pages;