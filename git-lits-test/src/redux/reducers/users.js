import {FETCH_USERS, FILTER_USERS} from "../actions/users";

const InitialState = {
    fetchUsers: [],
    users: [],
};

export default function usersReducer(state = InitialState, action) {
    switch (action.type) {
        case FETCH_USERS: {
            return { ...state, fetchUsers: action.payload, users: action.payload };
        }
        case FILTER_USERS: {
            return { ...state, users: [...state.fetchUsers].filter(item => item.login.includes(action.payload)) };
        }
        default: {
            return { ...state };
        }
    }
}
