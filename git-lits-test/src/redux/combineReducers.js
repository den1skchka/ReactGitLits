import { combineReducers } from 'redux';
import usersReducer from "./reducers/users";
import userDetailsReducer from "./reducers/userDetails";

const rootReducer = combineReducers({
    users: usersReducer,
    userDetails: userDetailsReducer
});

export default rootReducer;
