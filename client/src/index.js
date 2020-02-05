import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';

import App from "./components/App";
import reducers from './reducers';
import {logger} from "./api/logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk, logger)));

ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);

