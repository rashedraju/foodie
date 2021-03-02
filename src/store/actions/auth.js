import * as actionTypes from './actionTypes';
import { auth } from '../../adapters/firebase';

const signupSuccess = data => ({
    type: actionTypes.SIGNUP_SUCCESS,
    data
})
const signupFail = msg => ({
    type: actionTypes.SIGNUP_FAIL,
    msg
})

export const signup = ({ firstName, lastName, email, password }) => dispatch => {
    dispatch({ type: actionTypes.SIGNUP_START })
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            const user = auth.currentUser;
            user.updateProfile({
                displayName: firstName + ' ' + lastName,
            })
                .then(() => {
                    dispatch(signupSuccess(user))
                })
                .catch(err => dispatch(signupFail(err.message)))

        })
        .catch(err => dispatch(signupFail(err.message)))
}
