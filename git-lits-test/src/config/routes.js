import React from 'react';
import UsersList from "../components/Users/UsersList/UsersList"
import UsersDetails from "../components/Users/UsersDetails/UsersDetails"
import {Redirect, Route, Switch,} from "react-router-dom";


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/users">
                <UsersList/>
            </Route>
            <Route exact path="/users/:name">
                <UsersDetails/>
            </Route>
            <Route>
                <Redirect to="/users"/>
            </Route>
        </Switch>
    );
};

export default Routes;
