import {LOGIN_DETAILS} from "./Types"

const initialState = {
    loginMessage:'',
  };
  
  const LRequestReducer = (state = initialState, action) => {
    // console.log("request reducer ",action)
    switch (action.type) {
      case LOGIN_DETAILS:
        return {
          ...state,
          loginMessage: action.payload, 
        };
     
      default:
        return state;
    }
  };
  export default LRequestReducer;
  