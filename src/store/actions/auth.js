import * as actionTypes from './actionTypes';
import { auth } from '../../adapters/firebase';

const authSuccess = data => ({
    type: actionTypes.AUTH_SUCCESS,
    data
})
const authFail = msg => ({
    type: actionTypes.AUTH_FAIL,
    msg
})

export const signup = ({ firstName, lastName, email, password }) => dispatch => {
    dispatch({ type: actionTypes.AUTH_START })
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            const user = auth.currentUser;
            user.updateProfile({
                displayName: firstName + ' ' + lastName,
            })
                .then(() => {
                    dispatch(authSuccess(user))
                })
                .catch(err => dispatch(authFail(err.message)))

        })
        .catch(err => dispatch(authFail(err.message)))
}

export const login = ({ email, password }) => dispatch => {
    dispatch({ type: actionTypes.AUTH_START })
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            dispatch(authSuccess(auth.currentUser))
        })
        .catch(err => dispatch(authFail(err.message)))
}