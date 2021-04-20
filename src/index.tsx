import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./global-styles";

import "normalize.css";
import { AuthStateProvider } from "@context/auth";
import { Amplify } from "@lib/amplify";
import { AmplifyContext } from "./context/amplify";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <AmplifyContext.Provider value={{ amplify: Amplify }}>
      <AuthStateProvider>
        <App />
      </AuthStateProvider>
    </AmplifyContext.Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
