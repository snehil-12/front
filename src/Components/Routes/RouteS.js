import React from "react";
import Home from "../Home";
import EditUser from "../EditUser";
import Cards from "../Cards";
import SignUp from "../SignUp";
import LoginForm from "../LoginForm";

import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";

import NavBar from "../NavBar";

function RouteS(props) {
  return (
    <div>
      {props.data === "true" ? <NavBar /> : null}
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/login" components={LoginForm} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/edituser/:id" component={EditUser} />
        <Route exact path="/addData" component={EditUser} />
        <Route exact path="/cards" component={Cards} />
        <Route exact path="/signup" components={SignUp} />
        <Redirect from="*" to={"/login"} />
      </Switch>
    </div>
  );
}

export default RouteS;
