import { updateObject } from 'shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user: {
        isAuthenticated: false,
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_STATE_CHANGED:
            return updateObject(state, { user: { ...action.user } });
        default:
            return state;
    }
};

export default reducer;
