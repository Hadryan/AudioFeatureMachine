import React, { ReactElement } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Dashboard from "../components/Dashboard";
import RedirectPage from "../Redirect";

const Router: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/redirect" component={RedirectPage} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default Router;
