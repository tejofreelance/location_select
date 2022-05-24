import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import MachineDetail from "./components/MachineDetail";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/details" component={MachineDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;