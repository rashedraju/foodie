import * as actionTypes from '../actions/actionTypes';

const initialState = {
    logedUser: {
        displayName: '',
        tokenId: null,
    },
    authStatus: {
        isAuthenticated: false,
        loading: false,
        error: false,
        msg: '',
    },
};

function authStart(state) {
    return {
        ...state,
        authStatus: {
            ...state.authStatus,
            loading: true,
        },
    };
}

const authSuccess = (state, action) => ({
    ...state,
    logedUser: {
        displayName: action.displayName,
        tokenId: action.refreshToken,
    },
    authStatus: {
        ...state.authStatus,
        isAuthenticated: true,
        loading: false,
        error: false,
        msg: '',
    },
});

const authFail = (state, action) => ({
    ...state,
    authStatus: {
        ...state.authStatus,
        isAuthenticated: false,
        loading: false,
        error: true,
        msg: action.msg,
    },
});

const authLogout = (state) => ({
    ...state,
    logedUser: {
        displayName: '',
        tokenId: null,
    },
    authStatus: {
        ...state.authStatus,
        isAuthenticated: false,
        loading: false,
        error: false,
        msg: '',
    },
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state);
        default:
            break;
    }
    return state;
};

export default reducer;
