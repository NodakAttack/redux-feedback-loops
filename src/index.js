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
  if (action.type === "PUT_FEELINGS") {
    return action.payload;
  } else if (action.type === "CLEAR") {
    return 0;
  }
  return state;
};

const understanding = (state = 0, action) => {
  if (action.type === "PUT_UNDERSTANDING") {
    return action.payload;
  } else if (action.type === "CLEAR") {
    return 0;
  }
  return state;
};

const support = (state = 0, action) => {
  if (action.type === "PUT_SUPPORT") {
    return action.payload;
  } else if (action.type === "CLEAR") {
    return 0;
  }
  return state;
};

const comments = (state = "", action) => {
  if (action.type === "PUT_COMMENTS") {
    return action.payload;
  } else if (action.type === "CLEAR") {
    return "";
  }
  return state;
};

// May try moving reducers to 1 reducer handling the feedback as an object

const storeInstance = createStore(
  combineReducers({
    feelings,
    understanding,
    support,
    comments,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
