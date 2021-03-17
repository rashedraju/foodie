import * as actionTypes from './actionTypes';

export const toggleCart = () => ({
    type: actionTypes.CART_SHOW_TOGGLE,
});

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
