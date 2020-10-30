import * as actionTypes from './actionTypes';
import axios from 'axios';

const API = 'https://api.edamam.com';
const API_ID = 'da74e8ed';
const API_KEY = 'ed17032dee115bf17bfeb5bb5aea6381';

export const searchQuery = (value) => {
    return {
        type: actionTypes.SEARCH_QUERY,
        query: value,
    };
};
export const searchFoodStart = () => {
    return {
        type: actionTypes.SEARCH_FOOD_START,
    };
};

export const searchFoodSuccess = (data) => {
    return {
        type: actionTypes.SEARCH_FOOD_SUCCESS,
        results: data,
        error: false
    };
};
export const searchFoodFail = () => {
    return {
        type: actionTypes.SEARCH_FOOD_FAIL
    };
};

export const searchFood = (query) => {
    return (dispatch) => {
        dispatch(searchFoodStart())
        axios
            .get(
                `${API}/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=30`
            )
            .then((response) => {
                dispatch(searchFoodSuccess(response.data.hits));
            })
            .catch((err) => {
                dispatch(searchFoodFail())
            });
    };
};
