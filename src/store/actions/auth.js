import * as actionTypes from './actionTypes';
import axios from 'axios';

const API_KEY = 'AIzaSyBh4NfdcwHo9A4pHAdf4b-659Xyr4MiG4s';

const authSuccess = (response) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        data: response
    }
}

const authFail = (err) => {
    return {
        type: actionTypes.AUTH_FAIL,
        err
    }
}

export const auth = (data, type) => {
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    if (type === 'login') url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

    const authData = {
        name: 'rashed raju',
        email: data.email.value,
        password: data.password.value
    }

    return dispatch => {
        axios
            .post(url, authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response))
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err))
            })
    }
}