import React from "react";
import Home from "../Home";
import EditUser from "../EditUser";
import Cards from "../Cards";
import SignUp from "../SignUp";
import LoginForm from "../LoginForm";
import PrivateRoute from "../PrivateRoute";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";

import NavBar from "../NavBar";

function RouteS(props) {
  // let check = JSON.parse(localStorage.getItem("login")).isloginin;
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LoginForm} />

        {/* <Route exact path="/home" component={Home} />
        <Route exact path="/edituser/:id" component={EditUser} />
        <Route exact path="/addData" component={EditUser} />
        <Route exact path="/cards" component={Cards} />
        <Route exact path="/signup" component={SignUp} /> */}

        <PrivateRoute path="/home" component={Home} token={props.token} exact />
        <PrivateRoute
          exact
          component={EditUser}
          path="/edituser/:id"
          token={props.token}
        />
        <PrivateRoute
          exact
          component={EditUser}
          path="/addData"
          token={props.token}
        />
        <PrivateRoute
          exact
          component={Cards}
          path="/cards"
          token={props.token}
        />
        <PrivateRoute
          exact
          component={SignUp}
          path="/signup"
          token={props.token}
        />

        <Redirect from="*" to={"/home"} />
      </Switch>
    </div>
  );
}

export default RouteS;
