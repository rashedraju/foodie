import axios from 'axios';
import * as actionTypes from './actionTypes';

const API = 'https://api.edamam.com';
const API_ID = 'da74e8ed';
const API_KEY = 'ed17032dee115bf17bfeb5bb5aea6381';

export const queryChange = (value) => ({
    type: actionTypes.SEARCH_QUERY,
    query: value,
});

export const searchFoodStart = () => ({
    type: actionTypes.SEARCH_FOOD_START,
});

export const searchFoodSuccess = (data) => {
    const foods = data.map((food) => {
        const id = food.recipe.uri.split('_')[1];
        const oldPrice = Math.floor(Math.random() * (20 - 10)) + 10;
        const newPrice = Math.floor(Math.random() * (20 - 10)) + 10 - 5;
        return {
            id,
            title: food.recipe.label,
            image: food.recipe.image,
            oldPrice,
            newPrice,
            isAddedToCart: false,
        };
    });
    return {
        type: actionTypes.SEARCH_FOOD_SUCCESS,
        foods,
    };
};

export const searchFoodFail = () => ({
    type: actionTypes.SEARCH_FOOD_FAIL,
});

export const isAddedToCart = () => ({
    type: actionTypes.IS_ADDED_TO_CART,
});

export const searchFood = (query) => (dispatch) => {
    dispatch(searchFoodStart());
    axios
        .get(`${API}/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=30`)
        .then((response) => {
            dispatch(searchFoodSuccess(response.data.hits));
        })
        .catch(() => {
            dispatch(searchFoodFail());
        });
};
