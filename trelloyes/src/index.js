// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App/App";
// import Store from "./Store";

// ReactDOM.render(
//   <React.StrictMode>
//     <App store={Store} />
//   </React.StrictMode>,
//   document.querySelector(".App")
// );

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App1";

ReactDOM.render(<App />, document.getElementById("root"));

//Line 9-calling App, sending an object with a key of store. With react, props
//are used as parameters, but in HTML attribute form.
//App({store:Store},x,x,x)

//Line 9- We now have access to the store prop in our App component

// index -> app - > list -> card
