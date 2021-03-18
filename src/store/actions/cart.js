import * as actionTypes from './actionTypes';

// Show or hide cart from UI
export const toggleCartUI = (bool = false) => ({
    type: actionTypes.TOGGLE_CART_UI,
    bool,
});

// Add or remove items from cart state
export const toggleToCart = (add, item) => {
    if (add) {
        return {
            type: actionTypes.ADD_TO_CART,
            item,
        };
    }
    return {
        type: actionTypes.REMOVE_FROM_CART,
        item,
    };
};
