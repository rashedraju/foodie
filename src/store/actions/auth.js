import { auth } from '../../adapters/firebase';
import * as actionTypes from './actionTypes';

export const authSuccess = (refreshToken, displayName) => ({
    type: actionTypes.AUTH_SUCCESS,
    refreshToken,
    displayName,
});

const authFail = (msg) => ({
    type: actionTypes.AUTH_FAIL,
    msg,
});

const authLogout = () => ({
    type: actionTypes.AUTH_LOGOUT,
});

const setSession = (sessId, dName) => {
    sessionStorage.setItem('foodie_sess', sessId);
    sessionStorage.setItem('user_dname', dName);
};

export const getSession = () => (dispatch) => {
    const tokenId = sessionStorage.getItem('foodie_sess');
    const displayName = sessionStorage.getItem('user_dname');
    if (tokenId && displayName) {
        dispatch(authSuccess(tokenId, displayName));
    }
};
const removeSession = () => {
    sessionStorage.removeItem('foodie_sess');
    sessionStorage.removeItem('user_dname');
};

export const logout = () => (dispatch) => {
    dispatch({ type: actionTypes.AUTH_START });
    auth.signOut()
        .then(() => {
            removeSession();
            dispatch(authLogout());
        })
        .catch((err) => dispatch(authFail(err.message)));
};

export const signup = ({ firstName, lastName, email, password }) => (dispatch) => {
    dispatch({ type: actionTypes.AUTH_START });
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            const user = auth.currentUser;
            user.updateProfile({
                displayName: `${firstName} ${lastName}`,
            })
                .then(() => {
                    setSession(user.refreshToken, user.displayName);
                    dispatch(authSuccess(user.refreshToken, user.displayName));
                })
                .catch((err) => dispatch(authFail(err.message)));
        })
        .catch((err) => dispatch(authFail(err.message)));
};

export const login = ({ email, password }) => (dispatch) => {
    dispatch({ type: actionTypes.AUTH_START });
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            setSession(auth.currentUser.refreshToken, auth.currentUser.displayName);
            dispatch(authSuccess(auth.currentUser.refreshToken, auth.currentUser.displayName));
        })
        .catch((err) => dispatch(authFail(err.message)));
};
