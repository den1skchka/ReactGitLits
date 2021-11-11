import UsersApi from "../../api/UsersApi";

export const FETCH_USER_DETAILS = 'FETCH_USER_DETAILS';

export function fetchUserDetailsAction(payload) {
    return {
        type: FETCH_USER_DETAILS,
        payload: payload
    };
}

export function fetchUserByName(name) {
    return async (dispatch) => {
        try {
            const response = await UsersApi.fetchUserByName(name);
            dispatch(fetchUserDetailsAction(response.data))
        } catch (e) {
            console.log(e)
        }
    }
};

export const FETCH_USER_REPOS = 'FETCH_USER_REPOS';

export function fetchUserReposAction(payload) {
    return {
        type: FETCH_USER_REPOS,
        payload: payload
    };
}

export function fetchUserRepos(name) {
    return async (dispatch) => {
        try {
            const response = await UsersApi.fetchUserRepos(name);
            dispatch(fetchUserReposAction(response.data))
        } catch (e) {
            console.log(e)
        }
    }
};

export const FILTER_USER_REPOS = 'FILTER_USER_REPOS';

export function filterUserReposAction(payload) {
    return {
        type: FILTER_USER_REPOS,
        payload: payload
    };
}

export const RESET_USER_DETAILS = 'RESET_USER_DETAILS';

export function resetUserDetailsAction() {
    return {
        type: RESET_USER_DETAILS,
    };
}

export const getUserDetails = (state) => state.userDetails