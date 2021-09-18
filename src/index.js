import React from 'react';
import ReactDOM from 'react-dom';
//  New! Redux!
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
//  New! Redux! 
import store from './store/index';

//  U don't have to wrap the highest <App /> component, but only wrapped components will have 
//  access to Redux.

//  Make sure to set the pre-coded "store" prop!
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));
