import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {SmurfsReducer} from './components/store/reducers/SmurfsReducer'; 

const store = createStore(SmurfsReducer);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById("root"));
