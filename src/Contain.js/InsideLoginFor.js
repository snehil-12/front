import React from 'react'
import LoginForm from '../Components/LoginForm'
import { connect } from "react-redux";
import { confirmLogin } from "../redux/AsyncAction";

import { useHistory } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import InsideHome from './InsideHome';
import Home from '../Components/Home';

function InsideLoginFor(props) {
  const history = useHistory();
    return (
        <div>
            <Router>
             <div className="InsideLogin">                           
             <Switch>
                <LoginForm/>
             </Switch>
             </div>
             </Router>
        </div>
    )
}

const mapStateToProps = (state) => ({
  loginMessage: state.LRequestReducer.loginMessage,
});

const mapDispatchToProps = {
  confirmLogin
};


export default connect(mapStateToProps,mapDispatchToProps)(InsideLoginFor)
