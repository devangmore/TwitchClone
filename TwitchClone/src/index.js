import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import App from "./components/App";
import reducers from "./reducers";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(

    <Provider store={createStore(reducers, composeEnhancers(applyMiddleware()))}>
        <App></App>
    </Provider>
    ,
    document.getElementById("root")
)