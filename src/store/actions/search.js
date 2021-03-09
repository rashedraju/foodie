import axios from 'axios';
import * as actionTypes from './actionTypes';

const API = 'https://api.edamam.com';
const API_ID = 'da74e8ed';
const API_KEY = 'ed17032dee115bf17bfeb5bb5aea6381';

export const searchQuery = (value) => ({
    type: actionTypes.SEARCH_QUERY,
    query: value,
});

export const searchFoodStart = () => ({
    type: actionTypes.SEARCH_FOOD_START,
});

export const searchFoodSuccess = (data, cartItems) => ({
    type: actionTypes.SEARCH_FOOD_SUCCESS,
    results: data,
    cartFoods: cartItems,
    error: false,
});

export const searchFoodFail = () => ({
    type: actionTypes.SEARCH_FOOD_FAIL,
});

export const isAddedToCart = () => ({
    type: actionTypes.IS_ADDED_TO_CART,
});

export const searchFood = (query, cartItems) => (dispatch) => {
    dispatch(searchFoodStart());
    axios
        .get(`${API}/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=30`)
        .then((response) => {
            dispatch(searchFoodSuccess(response.data.hits, cartItems));
        })
        .catch(() => {
            dispatch(searchFoodFail());
        });
};
