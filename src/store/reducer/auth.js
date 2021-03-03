import * as actionTypes from '../actions/actionTypes';

const initialState = {
    logedUser: {
        displayName: '',
        tokenId: null
    },
    authStatus: {
        isAuthenticated: false,
        loading: false,
        error: false,
        msg: ''
    }
}

function authStart(state) {
    return {
        ...state,
        authStatus: {
            ...state.authStatus,
            loading: true
        }
    }
}

function authSuccess(state, action) {
    return {
        ...state,
        logedUser: {
            displayName: action.data.displayName,
            tokenId: action.data.refreshToken
        },
        authStatus: {
            ...state.authStatus,
            isAuthenticated: true,
            loading: false,
            error: false,
            msg: ''
        }
    }
}

function authFail(state, action) {
    return {
        ...state,
        authStatus: {
            ...state.authStatus,
            isAuthenticated: false,
            loading: false,
            error: true,
            msg: action.msg
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action)
        case actionTypes.AUTH_FAIL:
            return authFail(state, action)
        default:
            break;
    }
    return state;
}

export default reducer;