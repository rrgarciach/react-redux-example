import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppContainer from './containers/appContainer';
import { configureStore } from './store/configureStore';

require('./styles/app.scss');
window.$ = window.jQuery = jQuery;

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);
