import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

const store = createStore((state = 0, action) => {
  //es un reducer
  //action = {type:'tipo de accion,payload:any}
  console.log({ state, action });
  switch (action.type) {
    case "accion":
      return action.payload;

    default:
      return state;
  }
});

store.dispatch({ type: "accion", payload: 2 });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
