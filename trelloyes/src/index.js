import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import Store from "./Store";

ReactDOM.render(
  <React.StrictMode>
    <App store={Store} />
  </React.StrictMode>,
  document.querySelector(".App")
);

//Line 9-calling App, sending an object with a key of store. With react, props
//are used as parameters, but in HTML attribute form.
//App({store:Store},x,x,x)
