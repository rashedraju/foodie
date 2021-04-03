import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from './reducer';

const logger = () => (next) => (action) => {
    const result = next(action);
    return result;
};

const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));

export const persistor = persistStore(store);
