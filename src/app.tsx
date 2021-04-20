import { AuthenticateCallback, Home } from "@/pages";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/authenticate-callback">
            <AuthenticateCallback />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
      />
    </>
  );
};

export default App;
