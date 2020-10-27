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

export const fatchSearchFoodSuccess = (data) => {
    return {
        type: actionTypes.FATCH_SEARCH_FOOD_SUCCESS,
        results: data,
        error: false
    };
};
export const fatchSearchFoodFail = () => {
    return {
        type: actionTypes.FATCH_SEARCH_FOOD_FAIL
    };
};

export const fatchSearchFood = (query) => {
    return (dispatch) => {
        dispatch(searchFoodStart())
        axios
            .get(
                `${API}/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=30`
            )
            .then((response) => {
                dispatch(fatchSearchFoodSuccess(response.data.hits));
            })
            .catch((err) => {
                console.log(err)
                dispatch(fatchSearchFoodFail())
            });
    };
};

//             const updatedRecipes = data.map((recipe, i) => {
//                 return {
//                     ...recipe,
//                     price: Math.floor(Math.random() * (20 - 10)) + 10,
//                     addToCart: false
//                 }
//             })
//             this.setState({ searchResults: updatedRecipes, loader: false });
