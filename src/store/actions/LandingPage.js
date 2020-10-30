import axios from 'axios';
import * as actionTypes from './actionTypes';

const getInitialFoodStart = () => {
    return {
        type: actionTypes.GET_INITIAL_FOOD_START,
    };
};

export const getInitialFoodSuccess = (data) => {
    return {
        type: actionTypes.GET_INITIAL_FOOD_SUCCESS,
        results: data,
        error: false
    };
};
export const getInitialFoodFail = () => {
    return {
        type: actionTypes.GET_INITIAL_FOOD_FAIL
    };
};

export const getInitailFood = () => {
    return (dispatch) => {
        dispatch(getInitialFoodStart());
        axios
            .get('https://goodie4foods.firebaseio.com/recipes.json')
            .then((response) => {
                dispatch(getInitialFoodSuccess(response.data));
            })
            .catch((err) => {
                dispatch(getInitialFoodFail());
            });
    };
};
