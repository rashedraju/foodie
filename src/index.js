import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

/** IMPORT BOOTSTRAP */
import 'bootstrap';

/** IMPORT STYLE */
import './sass/main.scss';
import './index.css';

/** ----- */
import axios from "axios";

/** -----*/
import App from './App';



/** AXIOS CONFIG */

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    return request;
}, error => {
    return Promise.reject(error);
});
axios.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
});

const app = (
    <BrowserRouter basename="/goodie">
        <App />
    </BrowserRouter>
)

/** ----- */
ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
