import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {counter} from './index.redux'
import App from './App'

const reduxDevtools = window.devToolsExtension() ? window.devToolsExtension() : f => f;
const store = createStore(counter, compose(
        applyMiddleware(thunk),
        reduxDevtools
    )
);
ReactDOM.render(
    (
        <Provider store={store}>
            <App />
        </Provider>
    ),
    document.getElementById('root'));
