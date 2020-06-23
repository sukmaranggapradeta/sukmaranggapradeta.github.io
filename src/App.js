import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch,
  // Redirect,
  // useLocation,
} from "react-router-dom";
import { WrapperApp } from "./styles";

import Home from "pages/home";
import AboutMe from "pages/about-me";
import Project from "pages/projects";

import Header from "components/header";
import Footer from "components/footer";
import NotFound from "pages/not-found";
// import Routes from "config/routes";

function App() {
  return (
    <WrapperApp>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/about" component={AboutMe} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </WrapperApp>
  );
}

export default App;
