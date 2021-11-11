import {FETCH_USER_DETAILS, FETCH_USER_REPOS, FILTER_USER_REPOS, RESET_USER_DETAILS} from "../actions/userDetails";

const InitialState = {
    userDetails: null,
    fetchedUserRepos: [],
};

export default function userDetailsReducer(state = InitialState, action) {
    switch (action.type) {
        case FETCH_USER_DETAILS: {
            return {...state, userDetails: action.payload};
        }
        case FETCH_USER_REPOS: {
            return {
                ...state, fetchedUserRepos: action.payload, userDetails: {
                    ...state.userDetails,
                    repos: action.payload
                }
            };
        }
        case FILTER_USER_REPOS: {
            return {
                ...state, userDetails: {
                    ...state.userDetails,
                    repos: [...state.fetchedUserRepos].filter(item => item.name.includes(action.payload))
                }
            };
        }
        case RESET_USER_DETAILS: {
            return {
                ...InitialState
            }
        }
        default: {
            return {...state};
        }
    }
}
