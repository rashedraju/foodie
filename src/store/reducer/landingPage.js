import * as actionTypes from '../actions/actionTypes';
import { updateObject, updateFood } from '../../shared/utility';
import isAddedToCart from '../../shared/isAddedToCart';

const initialState = {
    foods: [],
    error: false,
};
const getInitialFoodSuccess = (state, action) => {
    const updatedResults = action.results.map((food) => {
        const isAdded = isAddedToCart(action.cartFoods, food.id)
        
        return updateObject(food, {
            oldPrice: Math.floor(Math.random() * (20 - 10)) + 10,
            newPrice: (Math.floor(Math.random() * (20 - 10)) + 10) - 5,
            addedToCart: isAdded
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

const addToCart = (state, action) => {
    const updatedFoods = updateFood(state.foods, action.food.id)
    return updateObject(state, {foods: updatedFoods})
}

const removeFromCart = (state, action) => {
    const updatedFoods = updateFood(state.foods, action.food.id)
    return updateObject(state, {foods: updatedFoods})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_INITIAL_FOOD_SUCCESS:
            return getInitialFoodSuccess(state, action);
        case actionTypes.GET_INITIAL_FOOD_FAIL:
            return getInitialFoodFail(state, action);
        case actionTypes.ADD_TO_CART:
            return addToCart(state, action)
        case actionTypes.REMOVE_FROM_CART:
            return removeFromCart(state, action)
        default:
            return state;
    }
};

export default reducer;
