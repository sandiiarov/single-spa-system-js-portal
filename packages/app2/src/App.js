import React from "react";
import { hot } from "react-hot-loader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import loadable from "loadable-components";
import Menu from "./Menu";

const Page1 = loadable(() => import(/* webpackMode: "lazy" */ "./Page1"));
const Page2 = loadable(() => import(/* webpackMode: "eager" */ "./Page2"));

const App = () => (
  <Router>
    <div style={{ padding: 20 }}>
      <Switch>
        <Redirect exact from="/app2" to="/app2/1" />
      </Switch>
      <Route path="/app2/:page" component={Menu} />
      <Route exact path="/app2/1" component={Page1} />
      <Route exact path="/app2/2" component={Page2} />
    </div>
  </Router>
);

export default hot(module)(App);
