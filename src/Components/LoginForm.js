import { left } from "@popperjs/core";
import { confirmLogin } from "../redux/AsyncAction";
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import InsideHome from "../Contain.js/InsideHome";
// import { useDispatch, useSelector } from 'react-redux';
function LoginForm(props) {
  let history = useHistory();
  const inputRef = useRef(null);

  const [state, setState] = useState({
    email: "",
    password: "",
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

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (ValidateEmail(state.email)) props.confirmLogin(state);
    else alert("You have entered an invalid email address!");
  };
  useEffect(() => {
    if (props.loginMessage === "true") {
      history.push("/insideHome");
    }
  }, [props.loginMessage]);

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

        {/* <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Col >
            <Form.Control type="password" placeholder="ConfirmPassword"  id="confirmpassword"  className="LoginControl3" value={state.password} onChange={handleChange} />
          </Col>
        </Form.Group> */}

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Col>
            <input type="checkbox" className="remember" id="remember" />
            <label for="remember">Remember me</label>
          </Col>
        </Form.Group>
        <button className="btn btn-primary me-3 loginbtn">SignUp</button>
        <button
          className="btn btn-primary me-3 loginbtn"
          type="submit"
          onClick={handleSubmitClick}
        >
          {" "}
          Login
        </button>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loginMessage: state.LRequestReducer.loginMessage,
});

const mapDispatchToProps = {
  confirmLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
