import React, { useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import IndexPage from "./pages";
import AboutPage from "./pages/vision";

export const App = () => {
  const location = useLocation();

  // resets scroll on body after every change of route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route strict exact path="/" component={IndexPage} />
      <Route strict exact path="/vision" component={AboutPage} />
      <Redirect to="/" />
    </Switch>
  );
};
