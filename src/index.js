import React from "react"
import {render} from "react-dom"

import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './store/reducers/manipulateTodoState';

import App from './App';

injectTapEventPlugin();

const rootReducer = todoReducer;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

render(<Provider store={store}><App /></Provider>, document.getElementById("root"));