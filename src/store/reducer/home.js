import { isAddedToCart, updateFood, updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    foods: [],
    authRedirectPath: './',
};

const getInitialFoodSuccess = (state, action) => {
    const foods = action.foods.map((food) => ({
        ...food,
        price: Math.floor(Math.random() * (20 - 10)) + 10 - 5,
        isAddedToCart: isAddedToCart(action.cartItems, food.id),
    }));

    return updateObject(state, {
        foods: [...foods],
    });
};

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
        case actionTypes.GET_INITIAL_FOOD_SUCCESS:
            return getInitialFoodSuccess(state, action);
        case actionTypes.ADD_TO_CART:
            return addToCart(state, action);
        case actionTypes.REMOVE_FROM_CART:
            return removeFromCart(state, action);
        case actionTypes.AUTH_REDIRECT_PATH:
            return { ...state, authRedirectPath: action.path };
        default:
            return state;
    }
};

export default reducer;
