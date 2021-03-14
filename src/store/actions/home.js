import { database } from '../../adapters/firebase';
import * as actionTypes from './actionTypes';

// fetch foods success
export const getInitialFoodSuccess = (data) => {
    const foods = data.map((food) => {
        const oldPrice = Math.floor(Math.random() * (20 - 10)) + 10;
        const newPrice = Math.floor(Math.random() * (20 - 10)) + 10 - 5;
        return {
            ...food,
            oldPrice,
            newPrice,
            isAddedToCart: false,
        };
    });
    return {
        type: actionTypes.GET_INITIAL_FOOD_SUCCESS,
        foods,
    };
};

// auth redirect path on landing page
export const autRedirectPath = (path) => ({
    type: actionTypes.AUTH_REDIRECT_PATH,
    path,
});

// fetch inital foods
export const getInitailFood = () => (dispatch) => {
    const initialFoodsRef = database.ref('initialfoods');
    initialFoodsRef.on('value', (snapshot) => {
        const data = snapshot.val();
        dispatch(getInitialFoodSuccess(data));
    });
};
