import { LOGIN_DETAILS, RESET_CONFIRM_LOGIN, SIGNUP_DETAILS } from "./Types";

const initialState = {
  loginMessage: "false",
  SMessage: "",
};

const LRequestReducer = (state = initialState, action) => {
  // console.log("request reducer ",action)
  switch (action.type) {
    case LOGIN_DETAILS:
      return {
        ...state,
        loginMessage: action.payload,
      };
    case RESET_CONFIRM_LOGIN: {
      return {
        ...state,
        loginMessage: "false",
      };
    }
    case SIGNUP_DETAILS: {
      return {
        ...state,
        SMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
export default LRequestReducer;
