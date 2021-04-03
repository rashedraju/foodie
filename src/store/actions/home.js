import { database } from 'adapters/firebase';
import { isAddedToCart } from 'shared/utility';
import * as actionTypes from './actionTypes';

// fetch foods success
export const getInitialFoodSuccess = (data, cartItems) => {
    const foods = data.map((food) => ({
        ...food,
        price: Math.floor(Math.random() * (20 - 10)) + 10 - 5,
        isAddedToCart: isAddedToCart(cartItems, food.id),
    }));
    return {
        type: actionTypes.GET_INITIAL_FOOD_SUCCESS,
        foods,
    };
};

// fetch inital foods
export const getInitailFood = (cartItems) => (dispatch) => {
    const initialFoodsRef = database.ref('initialfoods');
    initialFoodsRef.on('value', (snapshot) => {
        const data = snapshot.val();
        dispatch(getInitialFoodSuccess(data, cartItems));
    });
};
// export const getInitailFood = (cartItems) => (dispatch) => {
//     console.log(initailFood());
//     // dispatch(getInitialFoodSuccess(initialFoods, cartItems));
// };

export const authRedirectPath = (path) => ({
    type: actionTypes.AUTH_REDIRECT_PATH,
    path,
});
