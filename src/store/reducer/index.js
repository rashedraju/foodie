import { combineReducers } from 'redux'
import landingPage from './landingPage';
import search from './search';

export default combineReducers({
    landingPage,
    search
})