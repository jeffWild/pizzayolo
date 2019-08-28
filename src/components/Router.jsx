import React, { Component } from "react";
import { Switch, Route } from "react-router";

import MainPizza from "./pizza/MainPizza";
import Accueil from "./Accueil"
import NotFound from "./utils/NotFound";
import PizzaFocus from "./pizza/PizzaFocus";

export default function Router() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/pizzas" component={MainPizza} />
          <Route path="/pizza/:nom" component={PizzaFocus} />
          <Route component={NotFound} />
        </Switch>
      </>  
    );
}
