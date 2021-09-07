import { left } from "@popperjs/core";
import { ConfirmSignUp } from "../redux/AsyncAction";
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";

function SignUp(props) {
  let history = useHistory();
  const inputRef = useRef(null);

  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    console.log("changess");
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  function ValidateEmail(inputText) {
    var mailformat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (mailformat.test(state.email)) {
      return true;
    } else {
      return false;
    }
  }

  function ValidatePassword() {
    if (state.password === state.confirmPassword) return true;
    else return false;
  }

  const handleSubmitClick = (e) => {
    if (ValidateEmail(state.email)) {
      if (ValidatePassword()) props.ConfirmSignUp();
      else alert("Password Not Match");
    } else {
      alert("You have entered an invalid email address!");
    }
  };

  //   useEffect(() => {
  //     if (props.loginMessage === "true") {
  //       history.push("/insideHome");
  //     }
  //   }, [props.loginMessage]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="loginform" style={{ border: "1px solid" }}>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Col>
            <Form.Control
              type="email"
              ref={inputRef}
              placeholder="Email"
              id="email"
              className="LoginControl1"
              value={state.email}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Col>
            <Form.Control
              type="password"
              placeholder="Password"
              id="password"
              className="LoginControl2"
              value={state.password}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Col>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
              className="LoginControl3"
              value={state.confirmPassword}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <button
          className="btn btn-primary me-3 loginbtn"
          type="submit"
          onClick={handleSubmitClick}
        >
          SignUp
        </button>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  SMessage: state.LRequestReducer.SMessage,
});

const mapDispatchToProps = {
  ConfirmSignUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
