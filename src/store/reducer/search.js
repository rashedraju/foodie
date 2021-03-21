import { updateFood, updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    query: '',
    loader: false,
    foods: [],
    error: false,
};

const searchFoodStart = (state) => updateObject(state, { loader: true });

const searchFoodSuccess = (state, action) =>
    updateObject(state, {
        foods: action.foods,
        loader: false,
        error: false,
    });

const searchFoodFail = (state) =>
    updateObject(state, {
        error: true,
        loader: false,
    });

const addToCart = (state, action) => {
    const updatedFoods = updateFood(state.foods, action.item.id);
    return updateObject(state, { foods: updatedFoods });
};

const removeFromCart = (state, action) => {
    const updatedFoods = updateFood(state.foods, action.id);
    return updateObject(state, { foods: updatedFoods });
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
        case actionTypes.ADD_TO_CART:
            return addToCart(state, action);
        case actionTypes.REMOVE_FROM_CART:
            return removeFromCart(state, action);
        default:
            return state;
    }
};
export default reducer;
