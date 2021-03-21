import { updateObject, updatePrice } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cartItems: [],
    cartShow: false,
    price: {
        subTotal: 0,
        deliveryFee: 0.8,
        vat: 0.5,
        total: 0,
    },
};

const updateItemCount = (state, action) => {
    const selectedItem = state.cartItems.find((cur) => cur.id === action.id);

    return updateObject(state, {
        cartItems: state.cartItems.map((item) => {
            if (item.id === action.id) {
                return {
                    ...selectedItem,
                    count: action.identifier === 'inc' ? item.count + 1 : item.count - 1,
                };
            }
            return item;
        }),
        price: updatePrice(
            state.price,
            selectedItem.price,
            1,
            action.identifier === 'inc' ? 'add' : 'sub'
        ),
    });
};

const toggleCartUI = (state, action) => updateObject(state, { cartShow: action.bool });

const addToCart = (state, action) => {
    const updatedCartItems = [
        ...state.cartItems,
        updateObject(action.item, { isAddedToCart: true, count: 1 }),
    ];
    return updateObject(state, {
        cartItems: [...updatedCartItems],
        price: updatePrice(state.price, action.item.price, 1, 'add'),
    });
};

const removeFromCart = (state, action) => {
    const selectedItem = state.cartItems.find((item) => item.id === action.id);
    return updateObject(state, {
        cartItems: state.cartItems.filter((item) => item.id !== action.id),
        price: updatePrice(state.price, selectedItem.price, selectedItem.count, 'sub'),
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return addToCart(state, action);
        case actionTypes.REMOVE_FROM_CART:
            return removeFromCart(state, action);
        case actionTypes.TOGGLE_CART_UI:
            return toggleCartUI(state, action);
        case actionTypes.UPDATE_ITEM_COUNT:
            return updateItemCount(state, action);
        default:
            return state;
    }
};

export default reducer;
