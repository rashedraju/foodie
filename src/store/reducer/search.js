import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
const initialState = {
    query: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_QUERY:
            return updateObject(state, {query: action.query});
    
        default:
            return state;
    }
}

export default reducer;