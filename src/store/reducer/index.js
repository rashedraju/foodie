import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth';
import cartReducer from './cart';
import homeReducer from './home';
import searchReducer from './search';

const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const searchPersistConfig = {
    key: 'search',
    storage,
    whitelist: ['query'],
};

const rootReducer = combineReducers({
    home: homeReducer,
    search: persistReducer(searchPersistConfig, searchReducer),
    cart: cartReducer,
    auth: authReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;
