import React from 'react';
import Home from "../components/Home/Home";
import UsersList from "../components/Users/UsersList/UsersList"
import UsersDetails from "../components/Users/UsersDetails/UsersDetails"
import {Redirect, Route, Router, Switch,} from "react-router-dom";


const Routes = () => {
    return (
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/users">
                    <UsersList/>
                </Route>
                <Route exact path="/users/:id">
                    <UsersDetails/>
                </Route>
                <Route>
                    <Redirect to="/"/>
                </Route>
            </Switch>
    );
};

export default Routes;
