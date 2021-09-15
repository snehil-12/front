import React from "react";
import Home from "../Home";
import EditUser from "../EditUser";
import Cards from "../Cards";
import SignUp from "../SignUp";
import LoginForm from "../LoginForm";

import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";

import NavBar from "../NavBar";

function RouteS() {
  // let check = JSON.parse(localStorage.getItem("login")).isloginin;
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/navbar" component={NavBar} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/edituser/:id" component={EditUser} />
        <Route exact path="/addData" component={EditUser} />
        <Route exact path="/cards" component={Cards} />
        <Route exact path="/signup" component={SignUp} />
        <Redirect from="*" to={"/home"} />
      </Switch>
    </div>
  );
}

export default RouteS;
