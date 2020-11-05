import * as actionTypes from './actionTypes';

export const loginInputChange = (event) => {
    return {
        type: actionTypes.LOGIN_INPUT_CHANGE,
        event
    }
}
export const signupInputChange = (event) => {
    return {
        type: actionTypes.SIGNUP_INPUT_CHANGE,
        event
    }
}