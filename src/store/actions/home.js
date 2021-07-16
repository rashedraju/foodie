import { database } from 'adapters/firebase';
import * as actionTypes from './actionTypes';

// fetch foods success
export const getInitialFoodSuccess = (foods, cartItems) => ({
    type: actionTypes.GET_INITIAL_FOOD_SUCCESS,
    foods,
    cartItems,
});

// fetch initial foods
export const getInitailFood = (cartItems) => (dispatch) => {
    const initialFoodsRef = database.ref('initialfoods');
    initialFoodsRef.on('value', (snapshot) => {
        const data = snapshot.val();
        dispatch(getInitialFoodSuccess(data, cartItems));
    });
};

export const authRedirectPath = (path) => ({
    type: actionTypes.AUTH_REDIRECT_PATH,
    path,
});
