import React from 'react'
import './App.css';

import InsideLoginFor from './Contain.js/InsideLoginFor';


import store from './redux/Store'
import {Provider} from 'react-redux'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import InsideHome from './Contain.js/InsideHome';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import { Redirect } from 'react-router';

function App() {
  return (
    
    <Router>
      <div className="App">
      <Provider store={store}>
        <Route exact path="/login" component={LoginForm}/>
        <Route path="/insideHome" component={InsideHome}/>
        <Redirect from="*" to={"/login"} />
      </Provider>
      </div>
    </Router>
    
  );
}

export default App;

