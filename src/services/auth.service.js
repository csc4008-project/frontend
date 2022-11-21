import axios from 'axios';
import authHeader from "@/services/auth-header";

const API_URL = process.env.VUE_APP_ROOT_API;

class AuthService {
    handleResponse(response) {
        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
    }

    login(user) {
        return axios
            .post(API_URL + 'login', {
                email: user.email,
                password: user.password
            })
            .then(response => {
                return this.handleResponse(response)
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios
            .post(API_URL + 'register', {
                name: user.name,
                email: user.email,
                password: user.password
            })
            .then(response => {
                return this.handleResponse(response)
            });
    }

    updateAccount(user) {
        return axios
            .post(API_URL + 'updateAccount', {
                name: user.name,
                email: user.email,
                password: user.password
            },{ headers: authHeader() })
            .then(response => {
                return this.handleResponse(response)
            });
    }
}

export default new AuthService();
