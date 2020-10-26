import * as actionTypes from './actionTypes';

export const searchQuery = (value) => {
    return {
        type: actionTypes.SEARCH_QUERY,
        query: value
    }
}