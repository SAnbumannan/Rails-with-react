import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import Home from "../components/Home";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/registerForm" exact component={RegisterForm} />
    </Switch>
  </Router>
);