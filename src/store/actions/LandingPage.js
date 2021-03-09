import { database } from '../../adapters/firebase';
import * as actionTypes from './actionTypes';

// fetch foods success
export const getInitialFoodSuccess = (data, cartItems) => ({
    type: actionTypes.GET_INITIAL_FOOD_SUCCESS,
    results: data,
    cartFoods: cartItems,
    error: false,
});

// auth redirect path on landing page
export const autRedirectPath = (path) => ({
    type: actionTypes.AUTH_REDIRECT_PATH,
    path,
});

// fetch inital foods
export const getInitailFood = (cartItems) => (dispatch) => {
    const initialFoodsRef = database.ref('initialfoods');
    initialFoodsRef.on('value', (snapshot) => {
        const data = snapshot.val();
        dispatch(getInitialFoodSuccess(data, cartItems));
    });
};
