import React from 'react'
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar'
import EditUser from './Components/EditUser';
import { Redirect } from 'react-router';
import Cards from './Components/Cards'

import store from './redux/Store'
import {Provider} from 'react-redux'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
      <Provider store={store}>
      <NavBar/>
      <Switch>
         <Route exact path="/home" component={Home}/>
         <Route exact path="/edituser/:id" component={EditUser}/>
         <Route exact path="/addData" component={EditUser}/>
         <Route exact path="/cards"  component={Cards}/>
         <Redirect from="*" to={"/home"} />
      </Switch>
    </Provider>
    </div>
    </Router>
  );
}

export default App;
