import { combineReducers } from 'redux';
import auth from './auth';
import cart from './cart';
import landingPage from './landingPage';
import search from './search';

export default combineReducers({
    landingPage,
    search,
    cart,
    auth,
});
