import React, { Suspense, lazy } from "react";
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { WrapperApp } from "./styles";
import Header from "components/header";
import Footer from "components/footer";
import Loading from "components/loading";
// const Header = lazy(() => import("components/header"));
// const Footer = lazy(() => import("components/footer"));

const Home = lazy(() => import("pages/home"));
const AboutMe = lazy(() => import("pages/about-me"));
const Contact = lazy(() => import("pages/contact"));
const Project = lazy(() => import("pages/projects"));
const NotFound = lazy(() => import("pages/not-found"));

function App() {
  return (
    <HashRouter basename="/">
      <WrapperApp>
        <Router>
          <Header />
          <Suspense fallback={<Loading />}>
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/">
                <Redirect to="/home" /> }
              </Route>
              <Route exact path="/home" component={Home} />
              <Route exact path="/project" component={Project} />
              <Route exact path="/about" component={AboutMe} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
          <Footer />
        </Router>
      </WrapperApp>
    </HashRouter>
  );
}

export default App;
