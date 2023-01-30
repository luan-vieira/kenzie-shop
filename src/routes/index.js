import React from "react";
import { Route, Switch } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageCart from "../pages/PageCart";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={PageHome} />

      <Route exact path="/cart" component={PageCart} />
    </Switch>
  );
}
export default Routes;
