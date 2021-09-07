import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import RouteS from "./Components/Routes/RouteS";

import { confirmLogin } from "./redux/AsyncAction";

function App(props) {
  return (
    <Router>
      <RouteS data={props.loginMessage} />
    </Router>
  );
}
const mapStateToProps = (state) => ({
  loginMessage: state.LRequestReducer.loginMessage,
});

const mapDispatchToProps = {
  confirmLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
