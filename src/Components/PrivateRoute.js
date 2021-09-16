import React from "react";
import { Route, Redirect } from "react-router-dom";
import { setToken } from "../redux/AsyncAction";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import Home from "./Home";
const PrivateRoute = ({ component: Component, token, ...rest }) => {
  console.log(token);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page

    <Route
      {...rest}
      render={(props) => {
        console.log("16", Component);
        token === true ? <Component {...props} /> : <Redirect to="/" />;
        <Component {...props} />;
      }}
    />
  );
};
const mapStateToProps = (state) => ({
  token: state.LRequestReducer.token,
});

const mapDispatchToProps = {
  setToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);

// Please note currently I am not at my desk, I will be back around 7.30 PM IST. Please feel free to drop me message, I will revert once I will be back.
