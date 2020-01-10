import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import {counter} from './index.redux'
import App from './App'
import {Provider} from "react-redux";

const reduxDevtools = window.devToolsExtension() ? window.devToolsExtension() : f => f;
const store = createStore(counter, compose(
        applyMiddleware(thunk),
        reduxDevtools
    )
);
ReactDOM.render(
    (<Provider store={store}><App/></Provider>),
    document.getElementById('root'));
