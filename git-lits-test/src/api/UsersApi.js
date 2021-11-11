import Axios from 'axios';

const github = 'https://api.github.com'

export default class UsersApi {
    static fetchUsers() {
        let url = `${github}/users`;

        return Axios.get(url);
    }

    static fetchUserByName(name) {
        let url = `${github}/users/${name}`;

        return Axios.get(url);
    }

    static fetchUserRepos(name) {
        let url = `${github}/users/${name}/repos`;

        return Axios.get(url);
    }
}