import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import IndexPage from "./pages";
import AboutPage from "./pages/vision";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route strict exact path="/" component={IndexPage} />
      <Route strict exact path="/vision" component={AboutPage} />
      <Route component={IndexPage} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
