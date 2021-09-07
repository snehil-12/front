import React from 'react'
import Home from '../Components/Home';
import NavBar from '../Components/NavBar'
import EditUser from '../Components/EditUser';
import { Redirect } from 'react-router';
import Cards from '../Components/Cards'

// import { connect } from "react-redux";
// import { confirmLogin } from "../redux/AsyncAction";


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function InsideHome(props) {
    return (
        <div>
            <Router>
             <div className="InsideHome">                           
             <NavBar/>
             <Switch>
               <Route exact path="/home" component={Home}/>
               <Route exact path="/edituser/:id" component={EditUser}/>
               <Route exact path="/addData" component={EditUser}/>
               <Route exact path="/cards"  component={Cards}/>
               <Redirect from="*" to={"/home"} />
             </Switch>
             </div>
             </Router>

         </div>
    )
}




export default InsideHome


