import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

//redux
import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// reducers

const feelings = (state = 0, action) => {
    if (action.type === 'PUT_FEELINGS'){
        return action.payload;
    }
    return state;
}


const storeInstance = createStore
(combineReducers({

}), applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
