import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { persistor, store } from './store';

require('dotenv').config();

const app = (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router basename="/foodie">
                <App />
            </Router>
        </PersistGate>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
