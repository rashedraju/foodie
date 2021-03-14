import { combineReducers } from 'redux';
import auth from './auth';
import cart from './cart';
import home from './home';
import search from './search';

export default combineReducers({
    home,
    search,
    cart,
    auth,
});
