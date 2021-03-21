import * as actionTypes from './actionTypes';

// Increment or Decrement item count
export const updateItemCount = (id, identifier) => ({
    type: actionTypes.UPDATE_ITEM_COUNT,
    id,
    identifier,
});

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
        id: item.id,
    };
};
