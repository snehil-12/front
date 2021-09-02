import { left } from '@popperjs/core';
import {confirmLogin } from "../redux/AsyncAction";
import React, {useState,useEffect} from 'react';
import { connect } from "react-redux";
import { useDispatch, useSelector } from 'react-redux';
function LoginForm(props) {
    const dispatch = useDispatch();
    const [state , setState] = useState({
        email : "",
        password : ""
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        console.log("fbjsbfdkf")
        props.confirmLogin();
    }
    return(
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form>
      <label>LOGIN FORM</label>

      <label className="label-control" float={left}>Email address</label>
      <input type="email" 
                       className="form-control" 
                       id="email" 
                       value={state.email}
                       onChange={handleChange}
      />
      <label className="label-control">Password</label>
      <input type="password" 
                        className="form-control" 
                        id="password" 
                        value={state.password}
                        onChange={handleChange} 
      />
      <button type="submit" onClick={handleSubmitClick} className="btn btn-primary"> Submit </button>
      </form>
      </div>
      
    )
    }
    
    const mapStateToProps = (state) => ({
        loginMessage: state.LRequestReducer.loginMessage,  
      });
      
    const mapDispatchToProps = {
        confirmLogin, 
      };
    
 export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);
    
