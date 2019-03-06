import React from "react";
import ReactDOM from "react-dom";
import "./index.module.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import authReducer from "./store/reducers/auth";
import jobsFetchReducer from "./store/reducers/jobsFetch";
import jobsFiltersReducer from "./store/reducers/jobsFilters";
const rootReducer = combineReducers({
  auth: authReducer,
  jobs: jobsFetchReducer,
  jobsFilters: jobsFiltersReducer
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
axios.defaults.headers.common["Content-Type"] = "application/json";
if (localStorage.getItem("token")) {
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem("token");
}
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <App />
      </React.Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
