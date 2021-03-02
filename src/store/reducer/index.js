import { combineReducers } from 'redux'
import landingPage from './landingPage';
import search from './search';
import cart from './cart';
import auth from './auth';

export default combineReducers({
    landingPage,
    search,
    cart,
    auth
})