import * as actionTypes from './actionTypes';

export const addToCart = (food) => {
    if (food.addedToCart) {
        return {
            type: actionTypes.REMOVE_FROM_CART,
            food
        }
    }
    return {
        type: actionTypes.ADD_TO_CART,
        food
    }
    
}