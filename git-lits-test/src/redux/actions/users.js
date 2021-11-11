import UsersApi from "../../api/UsersApi";

export const FETCH_USERS = 'FETCH_USERS';

export function fetchUsersAction(payload) {
    return {
        type: FETCH_USERS,
        payload: payload
    };
}

export function fetchUsers() {
    return async (dispatch) => {
            try {
                const response = await UsersApi.fetchUsers();
                dispatch(fetchUsersAction(response.data))
            } catch (e) {
                console.log(e)
            }
        }
    };

export const FILTER_USERS = 'FILTER_USERS';

export function filterUsersAction(payload) {
    return {
        type: FILTER_USERS,
        payload: payload
    };
}

export const getUsers = (state) => state.users