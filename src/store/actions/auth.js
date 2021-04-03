import * as actionTypes from './actionTypes';

export const authStateChanged = (user) => ({
    type: actionTypes.AUTH_STATE_CHANGED,
    user,
});
