import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Dashboard from "../Dashboard";
import RedirectPage from "../Redirect";

const Router = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/redirect" component={RedirectPage} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default Router;
