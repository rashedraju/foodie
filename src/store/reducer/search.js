import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    query: '',
    loader: false,
    searchResults: null,
    error: false,
    redirect: false
};

const searchFoodStart = (state) => {
    return updateObject(state, { loader: true, redirect: true});
};

const searchFoodSuccess = (state, action) => {
    const updatedResults = action.results.map((recipe) => {
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

const searchFoodFail = (state) => {
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
        case actionTypes.SEARCH_FOOD_SUCCESS:
            return searchFoodSuccess(state, action);
        case actionTypes.SEARCH_FOOD_FAIL:
            return searchFoodFail(state, action);
        default:
            return state;
    }
};

export default reducer;
