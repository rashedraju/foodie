import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getInitialFoodSuccess = (data, cartItems) => {
    return {
        type: actionTypes.GET_INITIAL_FOOD_SUCCESS,
        results: data,
        cartFoods: cartItems,
        error: false
    };
};
export const getInitialFoodFail = () => {
    return {
        type: actionTypes.GET_INITIAL_FOOD_FAIL
    };
};

export const getInitailFood = (cartItems) => {
    return (dispatch) => {
        axios
            .get('https://goodie4foods.firebaseio.com/recipes.json')
            .then((response) => {
                dispatch(getInitialFoodSuccess(response.data, cartItems));
            })
            .catch((err) => {
                dispatch(getInitialFoodFail());
            });
    };
};

