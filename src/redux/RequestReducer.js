import {FETCH_USERS_DETAILS,FETCH_SINGLE_USER_DETAILS,DATA_DELETED,CHANGE_CONDUCTED_IN_DELETE,EDIT_CONDUCTED} from "./Types";
import {USER_ADDED,NO_OF_EMP,SET_ALERT_MESSAGE,CHANGE_DATA_CONDUCTED,RESET_ALERT_MESSAGE} from "./Types";

const initialState = {
  // loading: false,
  data: [],
  alertMessage: "",
  dataDeleted: false,
  noofemp: "",
  showAlert:true
};

const RequestReducer = (state = initialState, action) => {
  // console.log("request reducer ",action)
  switch (action.type) {
    case FETCH_USERS_DETAILS:
      return {
        ...state,
        data: action.payload,
      };
    case FETCH_SINGLE_USER_DETAILS:
      return {
        ...state,
        data: action.payload,
      };
    case DATA_DELETED:
      return {
        ...state,
        dataDeleted:true,
        alertMessage:action.payload,
      };
    case CHANGE_CONDUCTED_IN_DELETE:
      return {
        ...state,
        dataDeleted: false,
        alertMessage: "",
      };
    case EDIT_CONDUCTED:
      return {
        ...state,
        alertMessage: action.payload,
      };
    case USER_ADDED:
      return {
        ...state,
        alertMessage: action.payload,
      };
    case NO_OF_EMP:
      return {
        ...state, 
        noofemp: action.payload,
      };
    case CHANGE_DATA_CONDUCTED:
      return {
        ...state,
        data: [],
      };
    case SET_ALERT_MESSAGE:
      return{
        ...state,
        alertMessage:action.payload
      }
    case RESET_ALERT_MESSAGE:
      return {
        ...state,
        alertMessage:"",
      };

    default:
      return state;
  }
};
export default RequestReducer;
