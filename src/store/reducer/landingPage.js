import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    loader: false,
    foods: null,
    error: false,
};

const getInitialFoodStart = (state) => {
    return updateObject(state, { loader: true});
};

const getInitialFoodSuccess = (state, action) => {
    const updatedResults = action.results.map((recipe) => {
        return updateObject(recipe, {
            price: Math.floor(Math.random() * (20 - 10)) + 10,
            addToCart: false,
        });
    });
    return updateObject(state, {
        loader: false,
        error: action.error,
        foods: updatedResults
    });
};

const getInitialFoodFail = (state) => {
    return updateObject(state, {
        error: true,
        loader: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_INITIAL_FOOD_START:
            return getInitialFoodStart(state, action);
        case actionTypes.GET_INITIAL_FOOD_SUCCESS:
            return getInitialFoodSuccess(state, action);
        case actionTypes.GET_INITIAL_FOOD_FAIL:
            return getInitialFoodFail(state, action);
        default:
            return state;
    }
};

export default reducer;
