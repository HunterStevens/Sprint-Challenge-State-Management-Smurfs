import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {SmurfsReducer} from './components/store/reducers/SmurfsReducer';
import thunk from 'redux-thunk'; 

const store = createStore(SmurfsReducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById("root"));
