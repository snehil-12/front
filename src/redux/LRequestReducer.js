import {LOGIN_DETAILS,RESET_CONFIRM_LOGIN} from "./Types"

const initialState = {
    loginMessage:"false",
  };
  
  const LRequestReducer = (state = initialState, action) => {
    // console.log("request reducer ",action)
    switch (action.type) {
      case LOGIN_DETAILS:
        return {
          ...state,
          loginMessage:action.payload,   
        };
      case RESET_CONFIRM_LOGIN:{
        return{
        ...state,
        loginMessage:"false"
        }
      }
     
      default:
        return state;
    }
  };
  export default LRequestReducer;
  