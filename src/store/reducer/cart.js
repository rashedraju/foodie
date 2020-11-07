import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    foods: []
}

const addToCart = (state, action) => {
    const foods = [...state.foods];
    const updatedFood = updateObject(action.food, {
        addedToCart: true
    })
    foods.push(updatedFood)
    return updateObject(state, {
        foods: foods
    })
}

const removeFromCart = (state, action) => {
    const updatedFoods = [...state.foods];
    const foodIndex = updatedFoods.findIndex(el => action.food.id === el.id)
    updatedFoods.splice(foodIndex, 1);
    return updateObject(state, { foods: updatedFoods })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return addToCart(state, action)
        case actionTypes.REMOVE_FROM_CART:
            return removeFromCart(state, action)
        default:
            return state;
    }
}

export default reducer;