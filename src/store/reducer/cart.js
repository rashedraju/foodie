import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cartItems: [],
};

const addToCart = (state, action) => {
    const cartItems = [...state.cartItems];
    const updatedItem = updateObject(action.item, { isAddedToCart: true });
    cartItems.push(updatedItem);
    return updateObject(state, {
        cartItems,
    });
};

const removeFromCart = (state, action) => {
    const cartItems = [...state.cartItems];
    const itemIndex = cartItems.findIndex((item) => action.item.id === item.id);
    cartItems.splice(itemIndex, 1);
    return updateObject(state, { cartItems });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return addToCart(state, action);
        case actionTypes.REMOVE_FROM_CART:
            return removeFromCart(state, action);
        default:
            return state;
    }
};

export default reducer;
