import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    query: 'burger',
    loader: false,
    searchResults: null,
    error: false,
    redirect: false
};

const searchFoodStart = (state) => {
    if (state.query !== '') {
        return updateObject(state, { loader: true, redirect: true});
    }
};

const fatchSearchFoodSuccess = (state, action) => {
    const updatedResults = action.results.map((recipe, i) => {
        return updateObject(recipe, {
            price: Math.floor(Math.random() * (20 - 10)) + 10,
            addToCart: false,
        });
    });
    return updateObject(state, {
        loader: false,
        error: action.error,
        searchResults: updatedResults,
        redirect: false
    });
};

const fatchSearchFoodFail = (state) => {
    return updateObject(state, {
        error: true,
        loader: false,
        redirect: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_QUERY:
            return updateObject(state, { query: action.query });
        case actionTypes.SEARCH_FOOD_START:
            return searchFoodStart(state, action);
        case actionTypes.FATCH_SEARCH_FOOD_SUCCESS:
            return fatchSearchFoodSuccess(state, action);
        case actionTypes.FATCH_SEARCH_FOOD_FAIL:
            return fatchSearchFoodFail(state, action);
        default:
            return state;
    }
};

export default reducer;
