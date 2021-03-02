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

function signupStart(state) {
    return {
        ...state,
        authStatus: {
            ...state.authStatus,
            loading: true
        }
    }
}

function signupSuccess(state, action) {
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

function signupFail(state, action) {
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
        case actionTypes.SIGNUP_START:
            return signupStart(state);
        case actionTypes.SIGNUP_SUCCESS:
            return signupSuccess(state, action)
        case actionTypes.SIGNUP_FAIL:
            return signupFail(state, action)
        default:
            break;
    }
    return state;
}

export default reducer;