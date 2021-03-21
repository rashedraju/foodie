import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reducer from './reducer';

const logger = () => (next) => (action) => {
    const result = next(action);
    return result;
};

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'auth'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(logger, thunk))
);

export const persistor = persistStore(store);
