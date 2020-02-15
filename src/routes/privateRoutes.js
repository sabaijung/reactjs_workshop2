import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        return <Redirect to={{ pathname: '/authentication/login' }} />
    }} />
)

export default PrivateRoute;