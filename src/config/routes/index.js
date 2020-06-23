import React from "react";
import {
  // BrowserRouter as Router,
  Route,
  // Link,
  Switch,
  Redirect,
  // useLocation,
} from "react-router-dom";
import Home from "pages/home";
import NotFound from "pages/not-found";

function index() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/old-match">
          <Redirect to="/will-match" />
        </Route>
        <Route path="/will-match">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default index;
